import React from "react";

import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import ApiDashboard from "@/components/ApiDashboard";
import RequestApiKey from "@/components/RequestApiKey";



export const metadata: Metadata = {
  title: "API Service | Dashboard",
  description: "Create, Revoke API, also API history",
};

const page = async ({}) => {
  const user = await getServerSession(authOptions);

  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user?.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-12">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default page;

export const dynamic = "force-static";