import { createClient } from "@/utils/supabase/server";
import CreateNew from "./createNew";
import { redirect } from "next/navigation";

export default async function CreateNewPageWrapper() {
    const client = await createClient();
    const user = await client.auth.getUser();

    console.log(user.data.user?.id);

    if (!user.data.user) {
        redirect("/login");
    }

    return <CreateNew />
}