'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { User } from '../schemas'

export async function login({
  email,
  password
}: {
  email: string,
  password: string
}): Promise<string | never> {
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    return error.message
  }

  revalidatePath('/', 'layout')
  redirect('/');
}

export async function signup({
  email,
  password,
  nickname
}: {
  email: string
  password: string,
  nickname: string
}): Promise<string | never> {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: nickname
      }
    }
  })

  if (error) {
    return error.message
  }

  revalidatePath('/', 'layout')
  redirect('/');
}

export async function getUser(): Promise<User | string> {
  const supabase = await createClient();

  const res = await supabase.auth.getUser();

  if (res.error) return res.error.message;

  const singleRes = await supabase.from("profiles").select("*").eq("id", res.data.user.id).single();
  
  if (singleRes.error) return singleRes.error.message;

  return { email: res.data.user.email, ...singleRes.data };
}