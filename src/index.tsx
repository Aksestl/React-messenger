import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ChatProps} from './components/ChatItem/ChatItem';
import {currentDate} from './components/ChatItem/ChatItem';
import {ChatList} from './components/ChatList/ChatList';


const сhatsArr: ChatProps[] = [
  {
    title: 'My Chat1',
    data: currentDate,
    name: 'React-whale',
    text: 'Hello beauty, whats up?...'
  },
  {
    title: 'My Chat2',
    data: currentDate,
    name: 'React-whale',
    text: 'Hello beauty, whats up?...'
  },
  {
    title: 'My Chat3',
    data: currentDate,
    name: 'React-whale',
    text: 'Hello beauty, whats up?...'
  },
  {
    title: 'My Chat4',
    data: currentDate,
    name: 'React-whale',
    text: 'Hello beauty, whats up?...'
  },
  {
    title: 'My Chat5',
    data: currentDate,
    name: 'React-whale',
    text: 'Hello beauty, whats up?...'
  }
];


ReactDOM.render(<ChatList chats={сhatsArr} />, document.getElementById('root'));