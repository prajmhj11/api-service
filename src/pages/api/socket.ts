import { NextApiResponseWithSocket } from "@/types/api";
import { NextApiRequest } from "next";
import { Server } from "socket.io";

const SocketHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    const showNotification = () => {
      io.on("connection", (socket) => {
        socket.on("show-notification", (message) => {
          socket.broadcast.emit("notifications", message);
        });
      });
    };
  }
  res.end();
};

export default SocketHandler;
