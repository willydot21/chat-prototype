import useChats from "../../hooks/useChats/useChats";
import LastChat from "../last-chat/last-chat";

export default function Chats() {

  const { chats } = useChats();

  return (
    <section className="chats">{
      chats.map(chat => <LastChat chat={chat} />)
    }</section>
  );

}