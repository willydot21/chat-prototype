import { IAppState } from "../../app-types";
import { ILastChat } from "../../models/chat";

export interface IChatsContext {
  chatsState: IAppState<ILastChat[]>;
}