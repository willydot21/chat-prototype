import { ChatsContextProvider } from "../../context/chats-context/chats-context";
import AddChatInput from "../input/add-chat-input";
import Chats from "../chats/chats";

export default function LeftBar() {
  return (
    <article className="left-bar">
      <ChatsContextProvider>
        <AddChatInput />
        <Chats />
      </ChatsContextProvider>
    </article>
  );
}