import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_ID ??
        (() => {
          throw new Error("GITHUB_ID is not defined");
        })(),
      clientSecret:
        process.env.GOOGLE_SECRET ??
        (() => {
          throw new Error("GITHUB_SECRET is not defined");
        })(),
    }),

    // ...add more providers here
  ],

  // // Seconds - How long until an idle session expires and is no longer valid.
  // maxAge: 30 * 24 * 60 * 60, // 30 days
});

export { handler as GET, handler as POST };
