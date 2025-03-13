'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { User } from '../schemas'

// export async function handleSubmit(
//   title: string,
//   description: string,
//   privateFlashcards: boolean, 
//   questionsList: string[], 
//   answersList: string[]){

//   const supabase = await createClient();

//   if (!title.trim() || !description.trim() || questionsList.length === 0 || answersList.length === 0) {
//       return "Title, description, and at least one question-answer pair are required.";
//   }

//   try {
//       const user = await supabase.auth.getUser(); // Get the authenticated user

//       if (!user.data.user) {
//           return "User not authenticated";
//       }

//       // Insert into `flashcard` table
//       const { data: flashcardData, error: flashcardError } = await supabase
//           .from("flashcard")
//           .insert([
//               {
//                   user_id: user.data.user.id,
//                   f_name: title,
//                   description: description,
//                   public: !privateFlashcards,
//                   created_at: new Date(),
//               },
//           ])
//           .select()
//           .single();

//       if (flashcardError) {
//           return flashcardError.message;
//       }

//       // Insert related questions and answers into `flashcard_content` table
//       const flashcardId = flashcardData.id;
//       const flashcardEntries = questionsList.map((question, index) => ({
//           f_id: flashcardId,
//           question: question,
//           answer: answersList[index] || "",
//       }));

//       const { error: contentError } = await supabase.from("flashcard_content").insert(flashcardEntries);

//       if (contentError) {
//           return contentError.message;
//       }

//   } catch (error) {
//       return error;
//   }
// }

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
