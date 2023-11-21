import PrivacyPolicyContent from '@/components/PrivacyPolicy/PrivacyPolicyContent';
import styles from '@/app/typography.module.css';

export default function PrivacyPolicy() {
  return (
    <main
      style={{
        height: 'calc(100% - 57px)',
      }}
    >
      <div className={styles.container}>
        <PrivacyPolicyContent />
      </div>
    </main>
  );
}
