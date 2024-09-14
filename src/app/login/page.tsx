import Link from "next/link";
import AuthForm from "../components/AuthForm";
import login from "./actions";

export default function LoginPage() {
  return (
    <main className="flex-grow flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
        <AuthForm
          greetings={"Welcome Back !"}
          title="Login"
          action={login}
          actionButtonText="Sign In"
        />
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">
            Don't have an account?{" "}
          </span>
          <Link
            href="signUp"
            className="mx-2 text-sm font-bold text-gray-600  hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
