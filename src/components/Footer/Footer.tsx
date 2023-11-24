import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Link href='/about' className={styles.footerLink}>
          About us
        </Link>
        <Link href='/terms-of-use' className={styles.footerLink}>
          Terms of use
        </Link>
        <Link href='/privacy-policy' className={styles.footerLink}>
          Privacy Policy
        </Link>
        <Link href='/cookies' className={styles.footerLink}>
          Cookies
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
