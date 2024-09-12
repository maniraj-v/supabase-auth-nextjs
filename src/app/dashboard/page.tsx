import { redirect } from "next/navigation";

import { createBackEndClient } from "@/app/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createBackEndClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="text-center flex gap-8 flex-col pt-20">
      <h1 className="text-3xl font-semibold">User Dashboard Page</h1>
      <p>Hello {data.user.email}</p>
    </div>
  );
}
