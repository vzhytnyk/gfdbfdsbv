'use client';

import UndoButton from '@/components/Buttons/UndoButton';
import GameBoard from '@/components/GameBoard/GameBoard.component';
import styles from './page.module.css';
import HintButton from '@/components/Buttons/HintButton';

export default function Home() {
  return (
    <main
      style={{
        height: 'calc(100% - 57px)',
      }}
    >
      <div style={{ maxWidth: '70%' }}>
        <GameBoard />
      </div>
    </main>
  );
}
