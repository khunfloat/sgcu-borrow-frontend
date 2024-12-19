"use server";

import Fetcher from "@/utils/fetcher";
import type Responses from "@/utils/responses";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signin(prevState: any, formData: FormData) {
  const studentId = String(formData.get("studentId"));
  const password = String(formData.get("password"));

  const cookie = await cookies();

  const response: Responses = await Fetcher.post("/api/signin", {
    user_id: studentId,
    password: password,
  });

  if (response.isSuccess()) {
    const data = await response.json();
    cookie.set("token", data.token);
    cookie.set("name", data.name);
    cookie.set("exp", data.exp);
    redirect("/");
  } else if (response.isBadRequest()) {
    return {
      message: "Invalid credentials",
    };
  } else {
    return {
      message: "Something went wrong",
    };
  }
}
