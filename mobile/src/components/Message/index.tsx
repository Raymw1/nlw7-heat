import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export type MessageType = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

type MessageProps = {
  data: MessageType;
}

export function Message({ data }: MessageProps) {
  return (
    <MotiView
      style={styles.container}
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
    >
      <Text style={styles.message}>{data.text}</Text>
      <View style={styles.footer}>
        <UserPhoto size='small' imageUri={data.user.avatar_url} />
        <Text style={styles.userName}>{data.user.name}</Text>
      </View>
    </MotiView>
  );
}
