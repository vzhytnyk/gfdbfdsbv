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
      <Image
        src='/images/logo.png'
        width={120}
        height={31}
        alt='logo'
        style={{ marginRight: '54px' }}
      />
      <div className={styles.cards}>
        <TurnOne />
        <div className={styles.border} />
        <TurnThree />
      </div>

      <NewButton />

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
    </header>
  );
};

export default Header;
