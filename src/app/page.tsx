'use client';

import UndoButton from '@/components/Buttons/UndoButton';
import GameBoard from '@/components/GameBoard/GameBoard.component';
import styles from './page.module.css';
import HintButton from '@/components/Buttons/HintButton';

export default function Home() {
  return (
    <main
      style={{
        height: 'calc(100% - 55px)',
      }}
    >
      <div>
      <GameBoard />
      </div>
    </main>
  );
}
