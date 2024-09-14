import { redirect } from "next/navigation";

import { createBackEndClient } from "@/app/utils/supabase/server";
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";

export default async function UserProfile() {
  const supabase = createBackEndClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="flex w-full justify-center items-center pt-24">
      <section className="text-center shadow-xl py-8 px-8 rounded-md border border-gray-100 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-8">Account</h1>
        <div>
          <p className="text-gray-600 text-sm">Email</p>
          <p className="text-gray-800 font-semibold mb-8">{data.user.email}</p>
        </div>
        <Link
          href="resetPassword"
          className="mb-4 block w-full px-6 py-1 rounded-md border border-gray-500 text-gray-800"
        >
          Reset Password
        </Link>
        <LogoutButton />
      </section>
    </main>
  );
}
