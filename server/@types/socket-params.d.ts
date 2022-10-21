import { Socket } from "socket.io";

// with socket params.
export type DoHandler = (socket: Socket) => Promise<void> | void;
export type OnErrorHandler = (error: Error) => Promise<void> | void;

// suscribe ev.
export interface ISuscribeParam {
  toRoom: string;
}

// unsuscribe ev.
export interface IUnsuscribeParam {
  fromRoom: string;
}