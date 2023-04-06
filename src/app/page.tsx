import { Inter } from "next/font/google";

import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "API Service | Personal Project",
  description: "API Service - Create, Revoke API key and Google Authentication",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size={"md"}
            className={"three-d theme-heading text-black dark:text-light-gold"}
          >
            API Service <br /> <span>Personal Project</span>
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            With the API Service | Personal Project, you can easily create and revoke free {" "}
            <Link
              href={"/login"}
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              API Key
            </Link>
          </Paragraph>
          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{
                objectFit: "contain",
              }}
              fill
              src={"/api.png"}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
