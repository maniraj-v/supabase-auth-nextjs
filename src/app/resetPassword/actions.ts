"use server";

import { createBackEndClient } from "@/app/utils/supabase/server";

export default async function resetPassword(data: any) {
  const supabase = createBackEndClient();

  const passwordResetResponse = await supabase.auth.updateUser({
    password: data.password,
  });
  console.log(passwordResetResponse);

  if (passwordResetResponse.error) {
    return { isError: true, message: "Error Changing Password" };
  }
  return { isError: false, message: "Password Changed Successfully" };
}
