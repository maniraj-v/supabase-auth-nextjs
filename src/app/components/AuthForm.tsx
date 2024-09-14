export default function AuthForm({
  greetings,
  title,
  action,
  actionButtonText,
}) {
  return (
    <div className="px-6 py-4">
      <h3 className="mt-3 text-xl font-semibold text-center text-gray-800 ">
        {greetings}
      </h3>

      <p className="mt-1 text-center text-gray-600 ">{title}</p>

      <form>
        <div className="w-full mt-4">
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-gray-400 -300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-gray-300"
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
        </div>

        <div className="w-full mt-4">
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-gray-400 -300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-gray-300"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
        </div>

        <div className="flex items-center justify-center mt-4">
          <button
            formAction={action}
            className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            {actionButtonText}
          </button>
        </div>
      </form>
    </div>
  );
}
