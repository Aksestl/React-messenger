export interface IMessage {
  date: string;
  content: string;
};

export interface MessageProps extends IMessage {
  key: string;
};