import styles from '@/app/typography.module.css';
import TermsOfUseContent from '@/components/TermsOfUse/TermsOfUseContent';

export default function TermsOfUse() {
  return (
    <main
      style={{
        height: 'calc(100% - 55px)',
      }}
    >
      <div className={styles.container}>
        <TermsOfUseContent />
      </div>
    </main>
  );
}
