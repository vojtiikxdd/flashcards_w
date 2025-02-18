import { createClient } from "@/utils/supabase/server";
import Login from "./login";
import { redirect } from "next/navigation";

export default async function LoginPageWrapper() {
    const client = await createClient();
    const user = await client.auth.getUser();    

    if (user.data.user) {
        redirect("/");
    }

    return <Login />
}