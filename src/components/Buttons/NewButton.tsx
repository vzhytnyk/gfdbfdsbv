'use client';
import NewGameIcon from '@/icons/NewGameIcon';
import styles from './Buttons.module.css';
import NewGameBackground from '@/icons/NewGameBackground';
import gameBoardActions from '@/redux/gameBoard/gameBoard.actions';
import { useDispatch } from 'react-redux';

const NewButton = () => {
  const dispatch = useDispatch();

  const onNewGame = () => {
    dispatch(gameBoardActions.createGame());
  };

  return (
    <button className={styles.newButton} onClick={onNewGame}>
      <NewGameIcon style={{ position: 'relative', zIndex: 1 }} />
      <span style={{ position: 'relative', zIndex: 1 }}>New</span>
      <NewGameBackground className={styles.newButtonBackground} />
    </button>
  );
};

export default NewButton;
