"use server";

import { createBackEndClient } from "@/app/utils/supabase/server";

export default async function login(data: any) {
  const supabase = createBackEndClient();

  const signInResponse = await supabase.auth.signInWithPassword(data);

  if (signInResponse.error) {
    return {
      isError: true,
      message: "Login Failed. Please check credentials!",
    };
  }

  return { isError: false, message: "Login Successful" };
}
