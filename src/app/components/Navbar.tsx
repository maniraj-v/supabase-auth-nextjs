import { createBackEndClient } from "@/app/utils/supabase/server";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const supabase = createBackEndClient();

  const { data, error } = await supabase.auth.getUser();

  const isLoggedIn = !error && data?.user;

  return (
    <nav className="w-full flex justify-between py-2 px-8">
      <div>
        <Link href="/" className="px-6 py-1 rounded-md  text-blue-800">
          Home
        </Link>
      </div>
      <div>
        {isLoggedIn && <LogoutButton />}
        {!isLoggedIn && (
          <div className="flex gap-4">
            <Link
              href="login"
              className="px-6 py-1 rounded-md border border-blue-500 text-blue-800"
            >
              Login
            </Link>
            <Link
              href="signUp"
              className="px-6 py-1 rounded-md border border-gray-500 bg-blue-800 text-white"
            >
              SignUp
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
