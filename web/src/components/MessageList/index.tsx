import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt='DoWhile 2021' />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src='https://github.com/Raymw1.png' alt='Rayan Wilbert' />
            </div>
            <span>Rayan Wilbert</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src='https://github.com/Raymw1.png' alt='Rayan Wilbert' />
            </div>
            <span>Rayan Wilbert</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src='https://github.com/Raymw1.png' alt='Rayan Wilbert' />
            </div>
            <span>Rayan Wilbert</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
