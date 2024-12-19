"use client";

import { useActionState } from "react";
import { signin } from "./action";

const initialState = {
  message: "",
};

const LoginPage = () => {
  const [state, formAction, pending] = useActionState(signin, initialState);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action={formAction}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Student Login</h2>

        {/* Student ID */}
        <div className="mb-4">
          <label htmlFor="studentId" className="block text-gray-700 mb-1">
            Student ID
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            maxLength={10}
            placeholder="Enter 10-digit Student ID"
            className="text-black w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="text-black w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`w-full py-2 text-white font-semibold rounded ${
            pending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green hover:bg-green"
          }`}
          disabled={pending}
        >
          {pending ? "Logging in..." : "Login"}
        </button>

        {/* Error */}
        {state?.message && (
          <p className="mt-4 text-red-500 text-center">{state?.message}</p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
