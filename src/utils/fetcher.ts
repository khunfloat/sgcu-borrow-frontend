import Responses from "@/utils/responses";
import { cookies } from "next/headers";

const BASE_URL = "http://localhost:8000";

export default class Fetcher {
  static async post(url: string, body: any): Promise<Responses> {
    const cookie = await cookies();
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${String(cookie.get("token")?.value)}`,
      },
      body: JSON.stringify(body),
    });
    return new Responses(response);
  }
}
