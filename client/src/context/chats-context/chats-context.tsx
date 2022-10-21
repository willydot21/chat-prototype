import { createContext, useState } from "react";
import { AppComponentProps } from "../../app-types";
import { ILastChat } from "../../models/chat";
import { IChatsContext } from "./types";

const chatsContext = createContext({} as IChatsContext);

export function ChatsContextProvider({ children }: AppComponentProps) {

  const chatsState = useState<ILastChat[]>([]);

  return (
    <chatsContext.Provider value={{ chatsState }}>
      {children}
    </chatsContext.Provider >
  );

}

export default chatsContext;