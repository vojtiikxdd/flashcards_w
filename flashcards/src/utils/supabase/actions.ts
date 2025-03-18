'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { User } from '../schemas'

//this function uploads data to flashcards database
//it takes in the title, description, privateFlashcards, questionsList, and answersList
//it returns a string or void
export async function handleSubmit(
  title: string,
  description: string,
  privateFlashcards: boolean,
  questionsList: string[],
  answersList: string[]
): Promise<string | undefined> {
  const supabase = await createClient();

  if (!title.trim() || !description.trim() || questionsList.length === 0 || answersList.length === 0) {
    return "Title, description, and at least one question-answer pair are required.";
  }

  const user = await supabase.auth.getUser();

  if (user.error) return user.error.message;

  let res = await supabase.from("flashcard").insert({
    user_id: user.data.user.id,
    f_name: title,
    description: description,
    private: privateFlashcards,
  }).select().single();

  if (res.error) {
    return res.error.message;
  }
  

  const setId = res.data.id;

  const questions = questionsList.map((question, index) => {
    return {
      f_id: setId,
      question: question,
      answer: answersList[index],
    };
  });

  const res2 = await supabase.from("flashcard_content").insert(questions);

  if (res2.error) {
    return res2.error.message;
  }

  return undefined;
}

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
  console.log(email, password, nickname);

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

export async function signOut(): Promise<void> {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath('/', 'layout')
  redirect('/');
}
