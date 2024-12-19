import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import IsExpired from "./utils/jwt_utils";

export function middleware(request: NextRequest) {
  const expString = request.cookies.get("exp")?.value;
  const token = request.cookies.get("token")?.value;

  if (!expString || !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (IsExpired(expString)) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile"],
};
