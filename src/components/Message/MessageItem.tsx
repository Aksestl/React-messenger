import React from 'react';

import './MessageItem.css';
import logo from '../../img/logo.png';
import {MessageProps} from './types';

export const MessageItem = (props: MessageProps) => {
    return (
        <li className='message'>
            <img className='message__avatar' src={logo}/>
            <div className='message__body'>
                <h4 className='message__date'>
                    {props.date}
                </h4>
                <div className='message__content'>
                    {props.content}
                </div>
            </div>
        </li> 
    )
};
