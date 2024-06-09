import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
const handler = NextAuth();
