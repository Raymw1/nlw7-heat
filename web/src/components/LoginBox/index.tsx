import { VscGithubInverted } from 'react-icons/vsc';
import { useAuth } from '../../hooks/useAuth';

import styles from './styles.module.scss';

export function LoginBox() {
  const { signInUrl } = useAuth();

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Join and share your message</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size='24' />
        Sign In with Github
      </a>
    </div>
  );
}
