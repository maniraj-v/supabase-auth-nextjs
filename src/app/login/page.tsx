import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <section className="flex justify-center h-screen items-center">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 ">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 ">Login</p>

          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400 -300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400 -300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                formAction={login}
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span className="text-sm text-gray-600 ">
            Don't have an account?{" "}
          </span>

          <Link
            href="signUp"
            className="mx-2 text-sm font-bold text-blue-500  hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}
