import { ScrollView, View } from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '2121',
    text: 'Message text',
    user: {
      name: 'Rayan Wilbert',
      avatar_url: 'https://github.com/Raymw1.png',
    },
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
