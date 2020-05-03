import {IChatItem} from '../ChatItem/types';

export type IChatLits = IChatItem[];

export interface ChatListProps {
  chats: IChatLits;
  handleClickChat(id:string):void;
  //isActiveChat: boolean;
}

