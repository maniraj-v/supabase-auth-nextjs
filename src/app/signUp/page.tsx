import Link from "next/link";
import AuthForm from "../components/AuthForm";
import signup from "./actions";

export default function SignUpPage() {
  return (
    <section className="flex-grow flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
        <AuthForm
          greetings={"Create Account !"}
          title="Register"
          action={signup}
          actionButtonText="Sign Up"
        />

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
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
    </section>
  );
}
