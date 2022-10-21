import { useCallback, useState } from "react";
import useChats from "../../hooks/useChats/useChats";

export default function AddChatInput() {

  const chats = useChats();
  const [chatId, updateChatId] = useState('');

  const updateTextValue = useCallback((ev: React.KeyboardEvent<HTMLInputElement>) => {
    updateChatId((ev.target as HTMLInputElement).value);
  }, []);

  const addChat = useCallback(() => {
    chats.add(chatId);
  }, [chatId]);

  return (
    <section className="container">
      <label htmlFor="chat-id">
        Chat id:
        <input placeholder="..." id="chat-id" onKeyUp={updateTextValue} />
      </label>
      <button className="secondary" role="button" onClick={addChat}>ADD</button>
    </section>
  );

}