'use client';
import { useSelector } from 'react-redux';
import styles from './GamePlayInfo.module.css';
import { RootReducerState } from '@/global';
import useTimer from '@/hooks/useTimer';

const GamePlayInfo = () => {
  const { gameMoves } = useSelector(({ GameBoard }: RootReducerState) => ({
    gameMoves: GameBoard.gameMoves,
  }));

  // use the timer to get the current time units
  // const { seconds, minutes, hours } = useTimer();

  const gameScore = gameMoves * 5;

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.heading}>Time</p>
        <p className={styles.value}>
          {/* {hours > 0 ? `${hours}:` : null}
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds} */}
        </p>
      </div>
      <div className={styles.border} />
      <div>
        <p className={styles.heading}>Moves</p>
        <p className={styles.value}>{gameMoves}</p>
      </div>
      <div className={styles.border} />
      <div>
        <p className={styles.heading}>Score</p>
        <p className={styles.value}>{gameScore}</p>
      </div>
    </div>
  );
};

export default GamePlayInfo;
