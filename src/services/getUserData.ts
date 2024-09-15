import { createBackEndClient } from "@/app/utils/supabase/server";

export default async function getAuthUserData() {
  const supabase = createBackEndClient();

  const authResponse = await supabase.auth.getUser();

  const isLoggedIn = !authResponse.error && !!authResponse.data?.user;
  let userData = null;
  if (isLoggedIn) {
    const getByUserIdResponse = await supabase
      .from("users")
      .select("*")
      .eq("id", authResponse.data.user.id);
    userData = getByUserIdResponse.data ? getByUserIdResponse.data[0] : null;
  }

  return userData;
}
