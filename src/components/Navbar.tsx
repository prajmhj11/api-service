import { getServerSession } from "next-auth/next";
import Link from "next/link";
import React, { FC } from "react";
import { buttonVariants } from "@/ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";
import { authOptions } from "@/lib/auth";
import { Github } from "lucide-react";

const Navbar = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white-75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          API Service
        </Link>

        <div className="md:hidden">
          <Link
            target="_blank"
            href={"https://github.com/prajmhj11"}
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <Github className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
          </Link>
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <Link
            target="_blank"
            href={"https://github.com/prajmhj11"}
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <Github className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
          </Link>
          <ThemeToggle />
          <Link
            href={"/documentation"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                href={"/dashboard"}
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              href={"/login"}
              className={buttonVariants({ variant: "default" })}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
