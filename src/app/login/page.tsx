import AuthForm from "@/components/AuthForm";
import Link from "next/link";
import login from "./actions";

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
      <div className="px-6 py-4">
        <h3 className="my-3 text-xl font-semibold text-center text-gray-800 ">
          Welcome Back! Login
        </h3>
        <AuthForm type="login" action={login} />
      </div>
      <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
        <span className="text-sm text-gray-600 ">Don't have an account? </span>
        <Link
          href="signUp"
          className="mx-2 text-sm font-bold text-gray-600  hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
