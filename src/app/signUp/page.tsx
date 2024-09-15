import AuthForm from "@/components/AuthForm";
import Link from "next/link";
import signup from "./actions";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
      <div className="px-6 py-4">
        <h3 className="mt-3 mb-6 text-xl font-semibold text-center text-gray-800 ">
          Welcome! Create Account
        </h3>
        <AuthForm type="register" action={signup} />
      </div>

      <div className="flex items-center justify-center pb-4 text-center bg-gray-50 ">
        <span className="text-sm text-gray-600 ">
          Already have an account?{" "}
        </span>

        <Link
          href="login"
          className="mx-2 text-sm font-bold text-gray-500  hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
