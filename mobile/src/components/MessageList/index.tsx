import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { api } from '../../services/api';
import { Message, MessageType } from '../Message';

import { styles } from './styles';

export function MessageList() {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const { data } = await api.get<MessageType[]>('/messages/last3');
      setMessages(data);
    }
    fetchMessages();
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
