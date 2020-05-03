import React from 'react';

import './ChatItem.css';
import logo from '../../img/logo.png';
import {ChatItemProps} from './types';

export const ChatItem = (props: ChatItemProps) => {
    //{isActiveChat ? 'chat__active' : ''}

    return ( 
        <li className='chat' id={props.id} onClick={()=>{props.handleClickChat(props.id)}}> 
            <div className='chat__container'>
                <img className='chat__avatar' src={logo} alt={props.title}/>

                <div className='chat__body'>
                    <div className='chat__header'>
                        <h4 className='chat__title'>{props.title}</h4>
                        <div className='chat__date'>{props.data}</div>
                    </div>
                    
                    <div className='chat__message'>
                        <span className='chat__author'>{props.name}: </span>{props.text}
                    </div>

                </div>
            </div>
        </li> 
    
    )
};
