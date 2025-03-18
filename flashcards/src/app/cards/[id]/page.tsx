import { createClient } from "@/utils/supabase/server";
import Cards from "./cards";
import { redirect } from "next/navigation";
import { getFlashcardsWithId } from "@/utils/supabase/actions";

export default async function CardsWrapper({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const client = await createClient();
    const user = await client.auth.getUser();
    const id = (await params).id;
    const flashcards = await getFlashcardsWithId(id);

    if (!user.data.user || flashcards === undefined) {
        redirect("/login");
    }

    return <Cards cards={flashcards} />
}