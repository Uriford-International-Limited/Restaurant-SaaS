// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl.clone();

    // Admin route check
    if (url.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
      // Redirect guests or non-admin users
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // Only allow logged-in users
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"], // Only protect admin pages
};
