import { createContext, useEffect, useState } from 'react';
import clientSocket, { Socket } from 'socket.io-client';
import { AppComponentProps, IAppState } from '../../app-types';
import { api_domain, socketOptions } from '../../globals';

const socketContext = createContext({} as { socket: IAppState<Socket> });

export function SocketContextProvider({ children }: AppComponentProps) {

  const [socket, updateSocket] = useState(clientSocket(api_domain, socketOptions));

  useEffect(() => {

    socket.emit('suscribe', { toRoom: 1 });

  }, []);

  return (
    <socketContext.Provider value={{ socket: [socket, updateSocket] }}>
      {children}
    </socketContext.Provider >
  );

}

export default socketContext;