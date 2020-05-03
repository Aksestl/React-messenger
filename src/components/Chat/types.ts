import {IChatLits} from '../ChatList/types';
import {IMessageList} from '../MessageList/types';

export interface State {
  activeChatId: string; // ChatId
  messages: IMessageList;
  chats: IChatLits;
}