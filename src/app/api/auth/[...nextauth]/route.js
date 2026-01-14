import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/login`,
            credentials
          );

          if (res.data?.user) {
            return res.data.user;
          }
          return null;
        } catch (error) {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
        token.name = user.name;
        token.image = user.photo;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      session.user.role = token.role;
      session.user.name = token.name;
      session.user.image = token.image;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
