import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

export const runtime = "edge";

export default NextAuth(authOptions);
