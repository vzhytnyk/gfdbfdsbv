import styles from '@/app/typography.module.css';
import About from '@/components/About/About';

export default function AboutPage() {
  return (
    <main>
      <div className={styles.container}>
        <About />
      </div>
    </main>
  );
}
