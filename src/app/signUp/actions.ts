"use server";

import { createBackEndClient } from "@/app/utils/supabase/server";

export default async function signup(data: any) {
  const supabase = createBackEndClient();

  const signupResponse = await supabase.auth.signUp(data);
  console.log(signupResponse);

  if (signupResponse.error) {
    return { isError: true, message: "Error Registering User" };
  }

  // Insert users table
  const usersData = {
    id: signupResponse.data.user?.id,
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
  };
  const insertUserResponse = await supabase.from("users").insert([usersData]);
  console.log(insertUserResponse);

  if (insertUserResponse.error) {
    return { isError: true, message: "Error Registering User" };
  }
  return { isError: false, message: "Registration Successful" };
}
