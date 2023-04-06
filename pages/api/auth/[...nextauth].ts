import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, authOptions);

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export default authHandler;
