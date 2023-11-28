'use client';
import GameBoard from '@/components/GameBoard/GameBoard.component';
import GameInfo from '@/components/Home/GameInfo';
import gameConfigActions from '@/redux/gameConfig/gameConfig.actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../page.module.css';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameConfigActions.setGameMode('turnThree'));
  }, []);

  return (
    <main>
      <div className={styles.boardWithAdsContainer}>
        <div className={styles.boardContainer}>
          <GameBoard />
        </div>
        {/* <div className={styles.adsContainer}>
          <AdUnit
            className={styles.adUnitBig}
            publisherId={process.env.NEXT_PUBLIC_GOOGLE_PUBLISHER_ID}
            slotId={process.env.NEXT_PUBLIC_GOOGLE_SLOT_ID_BIG}
            layout='display'
          />
          <AdUnit
            className={styles.adUnitSm}
            publisherId={process.env.NEXT_PUBLIC_GOOGLE_PUBLISHER_ID}
            slotId={process.env.NEXT_PUBLIC_GOOGLE_SLOT_ID_SMALL}
            layout='display'
          />
        </div> */}
      </div>
      <GameInfo />
    </main>
  );
}
