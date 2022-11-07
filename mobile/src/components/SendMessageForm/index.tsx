import { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';
import { colors } from '../../theme';

import { Button } from '../Button';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

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
      />
    </View>
  );
}
