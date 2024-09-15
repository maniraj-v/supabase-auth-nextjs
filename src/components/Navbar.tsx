import getAuthUserData from "@/services/getUserData";
import { SettingsIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default async function Navbar() {
  const userData = await getAuthUserData();

  return (
    <nav className="w-full bg-white flex justify-between items-center py-3 px-4 border-b sticky top-0 z-10">
      <div>
        <Link
          href="/"
          className="flex gap-2 items-center px-2 sm:px-6 py-1 rounded-md  text-gray-800 text-xl font-semibold"
        >
          <span className={cn("hidden sm:inline-block", userData && 'inline-block')}>Area Ranker</span>
        </Link>
      </div>
      <div>
        {userData && (
          <div className="flex gap-8 items-center">
            {userData.role === "admin" && (
              <Link href="settings" title="Admin Settings">
                <SettingsIcon />
              </Link>
            )}
            <Link
              href="profile"
              title="User Profile"
              className="avatar placeholder"
            >
              <Avatar>
                <AvatarFallback className="border border-gray-400">
                  {userData.first_name?.[0] + userData.last_name?.[0]}
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
        )}
        {!userData && (
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
