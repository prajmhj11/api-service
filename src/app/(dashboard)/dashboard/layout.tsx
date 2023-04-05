"use client";

import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import { useEffect } from "react";
import { toast } from "@/components/ui/toast";

export default function Layout({ children }: { children: React.ReactNode }) {
  let socket: undefined | Socket;

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
      console.log(socket);
    });

    socket.on("notifications", (message) => {
      toast({
        title: "New Notification",
        message,
        type: "default",
      });
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return <section className="pt-20">{children}</section>;
}
