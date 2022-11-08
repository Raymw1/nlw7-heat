import { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';

import { styles } from './styles';
import { colors } from '../../theme';

import { Button } from '../Button';
import { api } from '../../services/api';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    try {
      const userMessage = message.trim();
      if (userMessage === '') return Alert.alert('Please, write your message to send to us!');
      setSendingMessage(true);
      await api.post('/messages', { text: userMessage });
      setMessage('');
      Keyboard.dismiss();

    } catch (error) {
      console.log(error)
    } finally {
      setSendingMessage(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardAppearance='dark'
        placeholder='What do you expect for the event?'
        placeholderTextColor={colors.gray_primary}
        multiline
        maxLength={140}
        value={message}
        onChangeText={setMessage}
        editable={!sendingMessage}
      />
      <Button
        title='SEND MESSAGE'
        backgroundColor={colors.pink}
        color={colors.white}
        onPress={handleMessageSubmit}
        isLoading={sendingMessage}
      />
    </View>
  );
}
