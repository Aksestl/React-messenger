import React from 'react';
import './ChatList.css';

import {ChatListProps} from './types';
import {ChatItem} from '../ChatItem/ChatItem';


export class ChatList extends React.Component <ChatListProps> {
    render() {
        return (
            <ul className='chat__list'> 
                {this.getChatElements()}
            </ul>
        );
    }

    getChatElements = () => {
        const prop = this.props;
        const sortChats = prop.chats.sort(function(a, b) { 
            if (a > b) { 
              return 1; } 
            if (a < b) { 
              return -1; } 
            return 0; 
        });

        return sortChats.map(chat => {
            return (
                <ChatItem 
                    key={chat.id} 
                    id={chat.id} 
                    title={chat.title} 
                    data={chat.data} 
                    name={chat.name} 
                    text={chat.text}
                    handleClickChat={this.props.handleClickChat}
                    //isActiveChat={prop.activeChatId === chat.id}
                ></ChatItem>
            );
        })
    }

};