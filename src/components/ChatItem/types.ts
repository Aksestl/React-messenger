
export interface IChatItem {
  id: string;
  title: string;
  data: string;
  name: string;
  text: string;
};

export interface ChatItemProps extends IChatItem {
  handleClickChat(id:string):void;
}