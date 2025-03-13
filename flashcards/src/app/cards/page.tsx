import { createClient } from "@/utils/supabase/server";
import Cards from "./cards";
import { redirect } from "next/navigation";

export default async function CardsWrapper() {
    const client = await createClient();
    const user = await client.auth.getUser();

    if (!user.data.user) {
        redirect("/login");
    }

    return <Cards />
}