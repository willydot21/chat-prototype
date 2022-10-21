import { useContext } from "react";
import socketContext from "../../context/socket-context/socket-context";

export default function useSocketContext() {

  const context = useContext(socketContext);
  const [socket,] = context.socket;

  const suscribeTo = (roomId: string) => {

    socket.emit('suscribe', { toRoom: roomId });

  }

  const unSuscribeFrom = (roomId: string) => {

    socket.emit('unsuscribe', { fromRoom: roomId });

  }

  return { socket }

}