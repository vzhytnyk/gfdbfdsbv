import Image from 'next/image';
import styles from './Header.module.css';
import TurnOne from '@/icons/TurnOne';
import TurnThree from '@/icons/TurnThree';
import NewButton from '../Buttons/NewButton';
import GamePlayInfo from '../GamePlayInfo/GamePlayInfo';
import RestartButton from '../Buttons/RestartButton';
import UndoButton from '../Buttons/UndoButton';
import PauseButton from '../Buttons/PauseButton';
import HintButton from '../Buttons/HintButton';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerWrapper}>
        <div className={styles.logoDesctopWrapper}>
          <Image
            src='/images/logo.png'
            width={120}
            height={31}
            alt='logo'
            style={{ marginRight: '54px' }}
            className={styles.logo}
          />
        </div>
        <div className={styles.logoMobileWrapper}>
          <Image
            src='/images/logo.png'
            width={100}
            height={30}
            alt='logo'
            style={{ marginRight: '11px' }}
            className={styles.logo}
          />
        </div>
        <div className={styles.cards}>
          <TurnOne />
          <div className={styles.border} />
          <TurnThree />
        </div>
        <div className={styles.newButtonWrapper}>
          <NewButton />
        </div>
        <div className={styles.desktopInfoButton}>
          <GamePlayInfo />
          <RestartButton />
          <div
            style={{ margin: '0 10px', height: '28.4px' }}
            className={styles.border}
          />
          <UndoButton />
          <div
            style={{ margin: '0 10px', height: '28.4px' }}
            className={styles.border}
          />
          <PauseButton />
          <div
            style={{ margin: '0 10px', height: '28.4px' }}
            className={styles.border}
          />
          <HintButton />
        </div>
      </div>
      <div className={styles.borderBottom} />
      <div className={styles.mobileInfoButton}>
        <GamePlayInfo />
        <RestartButton />
        <div
          style={{ margin: '0 10px', height: '28.4px' }}
          className={styles.border}
        />
        <UndoButton />
        <div
          style={{ margin: '0 10px', height: '28.4px' }}
          className={styles.border}
        />
        <PauseButton />
        <div
          style={{ margin: '0 10px', height: '28.4px' }}
          className={styles.border}
        />
        <HintButton />
      </div>
    </header>
  );
};

export default Header;
