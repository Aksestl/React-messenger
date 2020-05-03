import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Chat } from './components/Chat/Chat';

// TODO Вернуть APP
export const App = () => <Chat/>;

ReactDOM.render(<Chat/>, document.getElementById('root'));