import { View } from 'react-native';

import { styles } from './styles';
import { colors } from '../../theme';

import { Button } from '../Button';

export function SignInBox() {
  return (
    <View style={styles.container}>
      <Button
        title='Sign in with Github'
        color={colors.black_primary}
        backgroundColor={colors.yellow}
      />
    </View>
  );
}
