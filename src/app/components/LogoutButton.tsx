"use client";

import { useRouter } from "next/navigation";
import { createFrontEndClient } from "../utils/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = createFrontEndClient();
    const { error } = await supabase.auth.signOut();
    console.log("error", { error });
    if (error) {
      router.push("/error");
    }
    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-1 rounded-md border border-gray-500 bg-blue-800 text-white"
    >
      Logout
    </button>
  );
}
