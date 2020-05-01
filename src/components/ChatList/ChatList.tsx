import React, {Component} from 'react';
import './ChatList.css';
import {ChatProps} from '../ChatItem/ChatItem';
import {ChatItem} from '../ChatItem/ChatItem';

export interface ChatListProps {
    chats: ChatProps[];
};

export class ChatList extends React.Component <ChatListProps> {
    render() {
        return (
            <ul className='chat__list'>
                {this.getChatElements()}
            </ul>
        );
    }

    getChatElements = () => {
        return this.props.chats.map(chat => {
            return (
                <ChatItem key={chat.title} title={chat.title} data={chat.data} name={chat.name} text={chat.text}></ChatItem>
            );
        })
    }

};