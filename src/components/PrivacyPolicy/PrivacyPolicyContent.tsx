import Link from 'next/link';
import styles from '@/app/typography.module.css';

const PrivacyPolicyContent = () => {
  return (
    <>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p className={styles.text}>&nbsp;</p>
      <p className={styles.text}>SolitaireAce.com - Privacy Policy</p>
      <p className={styles.text}>Effective Date: August 24, 2023</p>
      <ol className={styles.list}>
        <li>
          Introduction At SolitaireAce.com, we respect and are committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website.
        </li>
        <li>
          Information We Collect We may collect personal identification
          information (such as names and email addresses) and non-personal
          identification information (such as browser name, type of computer,
          and technical information about users' means of connection to our
          site).
        </li>
        <li>
          How We Use Your Information We use the information we collect from you
          to enhance your experience on our site, respond to customer service
          requests, send periodic emails, and improve our website.
        </li>
        <li>
          How We Protect Your Information: We adopt appropriate data collection,
          storage, processing practices, and security measures to protect
          against unauthorized access, alteration, disclosure, or destruction of
          your personal information.
        </li>
        <li>
          Sharing Your Personal Information: We do not sell, trade, or rent
          users' personal identification information to others. We may share
          generic aggregated demographic information not linked to personal
          identification information regarding visitors and users with our
          business partners.
        </li>
        <li>
          Third-Party Websites Our website may contain links to other websites.
          If you click on a third-party link, you will be directed to that site.
          Note that we do not operate these external sites. Therefore, we
          strongly advise you to review the Privacy Policy of these websites.
        </li>
        <li>
          Changes To This Privacy Policy SolitaireAce.com can update this
          privacy policy anytime. When we do, we will post a notification on the
          main page of our Site. We encourage users to frequently check this
          page for any changes to stay informed about how we are helping to
          protect the personal information we collect.
        </li>
        <li>
          Your Acceptance Of These Terms By using this Site, you signify your
          acceptance of this policy. If you disagree with this policy, please do
          not use our Site.
        </li>
        <li>
          Contacting Us: If you have any questions about this Privacy Policy,
          the practices of this site, or your dealings with this site, please
          contact us at &nbsp;
          <Link
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
            href=' info@SolitaireAce.com'
          >
            info@SolitaireAce.com
          </Link>
          .
        </li>
      </ol>
      <p className={styles.text}>
        Thank you for choosing SolitaireAce.com.United States law I will be
        required to give out the requested user information.
      </p>
    </>
  );
};

export default PrivacyPolicyContent;
