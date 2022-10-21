import './style.css';
import { AppComponentProps } from "../../app-types";
import { ILastChat } from "../../models/chat";

export default function LastChat({ chat }: AppComponentProps<{ chat: ILastChat }>) {

  const { id, chatImage, lastMessage } = chat;

  return (
    <section className="last-chat">
      <img src={chatImage} className="icon" />
      <hgroup>
        <h5> {id}</h5>
        <h6>{lastMessage}</h6>
      </hgroup>
    </section>
  );

}
