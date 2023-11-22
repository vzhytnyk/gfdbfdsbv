'use client';
import GameBoard from '@/components/GameBoard/GameBoard.component';

export default function Home() {
  return (
    <main
      style={{
        height: 'calc(100% - 57px)',
      }}
    >
      <div style={{ maxWidth: '80%', height: '100%' }}>
        <GameBoard />
      </div>
    </main>
  );
}
