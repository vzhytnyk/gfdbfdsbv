import PrivacyPolicyContent from '@/components/PrivacyPolicy/PrivacyPolicyContent';
import styles from '@/app/typography.module.css';

export default function PrivacyPolicy() {
  return (
    <main>
      <div className={styles.container}>
        <PrivacyPolicyContent />
      </div>
    </main>
  );
}
