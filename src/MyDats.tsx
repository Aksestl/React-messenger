import {currentDate} from './utils'
import {IChatItem} from './components/ChatItem/types';

// TODO указать типы
export const chatsArr:IChatItem[] = [
  {
    id: '1',
    title: 'My Chat 1',
    data: currentDate,
    name: 'React-whale 1',
    text: 'Hello beauty, whats up?...',
  },
  {
    id: '2',
    title: 'My Chat 2',
    data: currentDate,
    name: 'React-whale 2',
    text: 'Hello beauty, whats up?...',
  },
  {
    id: '3',
    title: 'My Chat 3',
    data: currentDate,
    name: 'React-whale 3',
    text: 'Hello beauty, whats up?...',
  },
  {
    id: '4',
    title: 'My Chat 4',
    data: currentDate,
    name: 'React-whale 4',
    text: 'Hello beauty, whats up?...',
  },
  {
    id: '5',
    title: 'My Chat 5',
    data: currentDate,
    name: 'React-whale 5',
    text: 'Hello beauty, whats up?...',
  }
];

export const messageArr1 = [
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day!'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day! Have a very good day! Have a very good day!'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day! Have a very good day!'
  }
];

export const messageArr2 = [
  {
    date: currentDate,
    content: '1111111111111111111111111111111'
  },
  {
    date: currentDate,
    content: '2222222222222222222222222'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day! Have a very good day!'
  }
];

export const messageArr3 = [
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day!'
  },
  {
    date: currentDate,
    content: 'H222222222222222222222222222222ood day! Have a very good day!'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day! Have a very good day!'
  }
];

export const messageArr4 = [
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day!'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a 222222222222222e a very good day! Have a very good day!'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day! Have a very good day!'
  }
];

export const messageArr5 = [
  {
    date: currentDate,
    content: 'Hello be222222222222222e a good day!'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? Have a good day! Have a very good day! Have a very good day!'
  },
  {
    date: currentDate,
    content: 'Hello beauty, whats up? H222222222222222ay! Have a very good day!'
  }
];

export const messageArrs = [messageArr1, messageArr2, messageArr3, messageArr4, messageArr5];