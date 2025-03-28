import { getUser } from "@/utils/supabase/actions";
import Home from "./home";

export default async function HomeWrapper() {
    const user = await getUser();

    return <Home user={typeof user === "string" ? (user as string) : user} />;
}
