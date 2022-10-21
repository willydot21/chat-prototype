import { useContext } from "react";
import chatsContext from "../../context/chats-context/chats-context";
import { chatLogo } from "../../globals";

export default function useChats() {

  const context = useContext(chatsContext);
  const [chats, updateChats] = context.chatsState;

  const add = (id: string) => {

    const newChat = { id, lastMessage: 'No last message...', chatImage: chatLogo }

    updateChats([...chats, newChat]);

  }

  return { chats, add }

}