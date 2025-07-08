import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("x-access-token")?.value;

  const protectedRoutes = ["/home", "/dashboard"];
  const publicRoutes = ["/login", "/register", "/"];

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);

  if (isPublicRoute && accessToken) {
    const homeUrl = new URL("/home", request.url);
    return NextResponse.redirect(homeUrl);
  }

  if (isProtectedRoute && !accessToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*", "/login", "/register", "/"],
};
