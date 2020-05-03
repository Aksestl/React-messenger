import React from 'react';
import './Chat.css'
import {ChatList} from '../ChatList/ChatList';
import {MessageList} from '../MessageList/MessageList';

import {chatsArr, messageArrs} from '../../MyDats'

import {State} from './types';

export class Chat extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.handleClickChat = this.handleClickChat.bind(this);
  }

    state: Readonly<State> = {
      activeChatId: '',
      messages: [],
      chats: [],
    }

    public componentDidMount() {
      this.setState({
        chats: chatsArr,
        messages: messageArrs[0],
      })
    } 
  
    handleClickChat(id:string):void {
      this.setState({
        activeChatId: id,
        messages: messageArrs[Number(id)-1],
      })
    }

    public render() {
      const { messages, chats } = this.state;

      return <div className='chat'>
        <ChatList 
          chats={chats} 
          handleClickChat={this.handleClickChat}    
        />
        <MessageList messages={messages}/>
      </div>
    }
  };