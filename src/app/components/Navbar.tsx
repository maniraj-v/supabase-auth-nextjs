import { createBackEndClient } from "@/app/utils/supabase/server";
import Link from "next/link";

export default async function Navbar() {
  const supabase = createBackEndClient();

  const { data, error } = await supabase.auth.getUser();

  const isLoggedIn = !error && data?.user;

  return (
    <nav className="w-full flex justify-between items-center py-3 px-4 border-b sticky top-0 z-10">
      <div>
        <Link
          href="/"
          className="px-6 py-1 rounded-md  text-gray-800 text-xl font-semibold"
        >
          Area Ranker
        </Link>
      </div>
      <div>
        {isLoggedIn && (
          <div className="flex gap-4">
            <Link
              href="profile"
              title="User Profile"
              className="avatar placeholder"
            >
              <div className="bg-neutral text-neutral-content w-10 rounded-full">
                <span className="uppercase">
                  {data?.user?.email?.[0] || "A"}
                </span>
              </div>
            </Link>
          </div>
        )}
        {!isLoggedIn && (
          <div className="flex gap-4">
            <Link
              href="login"
              className="px-6 py-1 rounded-md border border-gray-500 text-gray-800"
            >
              Login
            </Link>
            <Link
              href="signUp"
              className="px-6 py-1 rounded-md border border-gray-500 bg-gray-800 text-white"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
