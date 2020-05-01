import React from 'react';
import ReactDOM from 'react-dom';
import './ChatItem.css';
import logo from '../../img/logo.png';

export interface ChatProps {
    id?: string;
    title: string;
    data: string;
    name: string;
    text: string; 
};

const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

export let currentDate = date.toLocaleString("ru", options);

export const ChatItem = (props: ChatProps) => {
    return (
        <li className='chat' id={props.id}>
            <a className='chat__container'>
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
            </a>
        </li> 
    
    )
};
