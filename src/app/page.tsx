'use client';
import GameBoard from '@/components/GameBoard/GameBoard.component';
import styles from './page.module.css';
import { AdUnit } from '@/components/Ads';
import GameInfo from '@/components/Home/GameInfo';

export default function Home() {
  return (
    <main
      style={{
        height: 'calc(100% - 57px)',
      }}
    >
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
      <GameInfo/>
    </main>
  );
}
