'use client';
import PauseIcon from '@/icons/PauseIcon';
import styles from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import gameBoardActions from '@/redux/gameBoard/gameBoard.actions';

const PauseButton = () => {
  const dispatch = useDispatch();

  const onGamePause = () => {
    dispatch(gameBoardActions.timeGame());
  };

  return (
    <button className={styles.actionButton} onClick={onGamePause}>
      <PauseIcon />
      <p>Pause</p>
    </button>
  );
};

export default PauseButton;
