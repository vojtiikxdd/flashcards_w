import { createClient } from "@/utils/supabase/server";
import Login from "./login";
import { redirect } from "next/navigation";

export default async function LoginPageWrapper() {
    const client = await createClient();

    if (await client.auth.getUser()) {
        redirect("/");
    }

    return <Login />
}