import { View } from 'react-native';

import { styles } from './styles';
import { colors } from '../../theme';

import { Button } from '../Button';
import { useAuth } from '../../hooks/auth';

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title='Sign in with Github'
        color={colors.black_primary}
        backgroundColor={colors.yellow}
        icon='github'
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
