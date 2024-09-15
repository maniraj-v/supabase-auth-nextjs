import AuthForm from "@/components/AuthForm";
import resetPassword from "./actions";

export default function ResetPassword() {
  return (
    <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md border border-gray-200">
      <div className="px-6 py-4">
        <h3 className="mt-3 mb-6 text-xl font-semibold text-center text-gray-800 ">
          Reset Your Password!
        </h3>
        <AuthForm type="resetPassword" action={resetPassword} />
      </div>
    </div>
  );
}
