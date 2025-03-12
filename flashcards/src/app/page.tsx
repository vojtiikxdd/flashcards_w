import { getUser } from "@/utils/supabase/actions";
import Home from "./home";

export default async function HomeWrapper() {
    const user = await getUser();
    console.log(user);

    return <Home user={user} />;
}

