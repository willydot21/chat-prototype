
import { ServerOptions } from "socket.io";

export const WHITE_LIST = ['http://localhost:3000', 'http://localhost:3001'];

export const serverOptions: Partial<ServerOptions> = {
  cors: {
    origin: WHITE_LIST,
    credentials: true
  }
}