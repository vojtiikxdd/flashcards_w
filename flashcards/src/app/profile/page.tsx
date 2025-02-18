import { getUser } from "@/utils/supabase/actions";
import UserProfile from "./user-profile";
import { redirect } from "next/navigation";
import { User } from "@/utils/schemas";

export default async function UserProfileWrapper() {
    const user = await getUser();

    if (typeof user === 'string') {
        redirect('/login');
    }

    return <UserProfile user={user as User} />
}