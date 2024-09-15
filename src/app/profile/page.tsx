import { redirect } from "next/navigation";

import Link from "next/link";
import LogoutButton from "../../components/LogoutButton";
import getAuthUserData from "@/services/getUserData";

export default async function UserProfile() {
  const userData = await getAuthUserData();

  if (!userData) {
    redirect("/login");
  }

  return (
    <section className="text-center shadow-xl py-8 px-8 rounded-md border border-gray-100 max-w-sm w-full">
      <h1 className="text-2xl font-bold mb-8">Account Info</h1>
      <div>
        <p className="text-gray-600 text-sm">Username</p>
        <p className="text-gray-800 font-semibold mb-4">
          {userData.first_name} {userData.last_name}
        </p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">Email</p>
        <p className="text-gray-800 font-semibold mb-8">{userData.email}</p>
      </div>
      <Link
        href="resetPassword"
        className="mb-4 block w-full px-6 py-1 rounded-md border border-gray-500 text-gray-800"
      >
        Reset Password
      </Link>
      <LogoutButton />
    </section>
  );
}
