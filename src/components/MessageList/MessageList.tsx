import React from 'react';
import './MessageList.css';
import {MessageListProps} from './types';
import {MessageItem} from '../Message/MessageItem';


export class MessageList extends React.Component <MessageListProps> {
    render() {
        return (
            <ul className='message__list'>
                {this.getMessageElements()}
            </ul>
        );
    }

    getMessageElements = () => {
    
        return this.props.messages.map((message, i) => {
            return (
                <MessageItem 
                    key={String(i)} 
                    date={message.date} 
                    content={message.content}
                ></MessageItem>
            );
        })
    }

};