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
    return "Title, description, and at least four question-answer pair are required.";
  }

  const user = await supabase.auth.getUser();

  if (user.error) return user.error.message;

  questionsList.map((question, index) => {
    if(question?.length > 672 || answersList[index]?.length > 672) {
      return "Question or answer " + index + " is too long.";
    }
  });

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

export async function getFlashcardsWithId(id: string): Promise<{
  user_id: string;
  f_name: string;
  description: string;
  list: {
    question: string;
    answer: string;
  }[]
} | undefined> {
  const supabase = await createClient();
  const user =  await supabase.auth.getUser();
  if (user.error) return undefined;

  const res = await supabase.from("flashcard").select("*").eq("id", id).single().then(async (res) => {
    if (res.error) return undefined;
    const questions = await supabase.from("flashcard_content").select("*").eq("f_id", id);
    if (questions.error) return undefined;
    return {
      ...res.data,
      list: questions.data
    }
  });

  return res;
}

export async function getFlashcardOfUser(): Promise<{
  id: string;
  f_name: string;
  description: string;
}[] | undefined> {

  const supabase = await createClient();

  const user =  await supabase.auth.getUser();

  if (user.error) return undefined;
  const res = await supabase.from("flashcard").select("id, f_name, description").eq("user_id", user.data.user.id);

  if (res.error) return undefined;
  return res.data as unknown as {
    id: string;
    f_name: string;
    description: string;
  }[];
}

export async function setLastOpened(id: string): Promise<string | undefined> {
  const supabase = await createClient();
  const { data: user, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user?.user) return undefined;

  const timestamp = new Date().toISOString(); // Ensure proper format

  const { error } = await supabase
    .from("flashcard")
    .update({ last_opened_at: timestamp }) // Store in the correct format
    .eq("id", id);

  if (error) return undefined;

  return timestamp; // Return the updated timestamp
}

export async function deleteFlashcard(id: string): Promise<string | undefined> {
  const supabase = await createClient();
  const { data: user, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user?.user) return undefined;

  const { error } = await supabase
    .from("flashcard")
    .delete()
    .eq("id", id);

  if (error) return error.message;

  return undefined;
}
