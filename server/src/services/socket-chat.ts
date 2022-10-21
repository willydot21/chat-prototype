import { Server, Socket } from "socket.io";
import { DoHandler, ISuscribeParam, IUnsuscribeParam, OnErrorHandler } from "../../@types/socket-params";

export default class SocketChat {

  private io: Server;
  private socket?: Socket;

  constructor(io: Server) {

    this.io = io;

    io.on('connection', socket => {
      this.socket = socket;
      this.setupSocketEvents();
    });

  }

  private setupSocketEvents() {

    const suscribeTo = ({ toRoom }: ISuscribeParam) => {

      this.withSocket(socket => socket.join(toRoom));

    }

    const unsuscribeFrom = ({ fromRoom }: IUnsuscribeParam) => {

      this.withSocket(socket => socket.leave(fromRoom));

    }

    this.withSocket(socket => {
      socket.on('suscribe', suscribeTo);
      socket.on('unsuscribe', unsuscribeFrom);
    });

  }

  private withSocket(dispatch: DoHandler, onError?: OnErrorHandler | null, emitError?: boolean) {

    if (!this.socket) {

      const socketError = new Error('SOCKET IS NOT DEFINED');

      if (onError) onError(socketError);

      return console.error(socketError);

    }
    // check only if socket exists, 
    // for use socket at context below...

    try { dispatch(this.socket); }

    catch (error) {

      if (onError) onError(error as Error);

      if (emitError) this.socket.emit('error', error as Error);

      console.error(error);

    }
    // capture socket error.

  }



}
