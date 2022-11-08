import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { api } from '../../services/api';
import { Message, MessageType } from '../Message';
import io from 'socket.io-client';

import { styles } from './styles';

let messagesQueue: MessageType[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});


export function MessageList() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const { data } = await api.get<MessageType[]>('/messages/last3');
      setMessages(data);
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((oldMessages) => {
          let messagesList = [...messagesQueue, ...oldMessages];
          if (messagesList.length > 3) messagesList = messagesList.slice(0, 3);
          messagesQueue = [];
          return messagesList;
        });
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      {messages.map(message => (<Message data={message} key={message.id} />))}
    </ScrollView>
  );
}
