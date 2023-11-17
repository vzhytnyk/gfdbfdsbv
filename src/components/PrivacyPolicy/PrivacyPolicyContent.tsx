import Link from 'next/link';
import styles from '@/app/typography.module.css';

const PrivacyPolicyContent = () => {
  return (
    <>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p className={styles.text}>
        This privacy notice discloses the privacy practices for&nbsp;
        <Link className={styles.link} href='https://worldofsolitaire.com'>
          https://worldofsolitaire.com
        </Link>
        . It applies solely to information collected by this website. It will
        notify you of the following:
      </p>
      <ul className={styles.list}>
        <li>
          What personally identifiable information is collected from you through
          the website, how it is used and with whom it may be shared.
        </li>
        <li>
          What choices are available to you regarding the use of your data.
        </li>
        <li>
          The security procedures in place to protect the misuse of your
          information.
        </li>
        <li>How you can correct any inaccuracies in the information.</li>
      </ul>
      <p className={styles.text}>
        Information Collection, Use, and SharingWe are the sole owners of the
        information collected on this site. We will not sell or rent this
        information to anyone.We partner with Google Analytics to monitor the
        traffic that visits this website.You can learn how Google uses this
        information by visiting:&nbsp;
        <Link className={styles.link} href='https://policies.google.com/?hl=en'>
          https://policies.google.com/?hl=en
        </Link>
        . This information is used to better manage the website. This
        information is sometimes shared with various partners including our ad
        parteners.Unless you ask us not to, we may contact you via email in the
        future. We have never direct e-mailed our users before. We've only
        replyed to e-mails sent by our users.Our advertising partners may use
        cookies to show you interest based and non-interest based advertising.
        You may opt-out of interest based advertising here: &nbsp;
        <Link
          className={styles.link}
          href='http://optout.networkadvertising.org/?c=1#!/'
        >
          http://optout.networkadvertising.org/?c=1#!/
        </Link>
        . We partner with Freestar to show advertising on this website.You
        can learn about Freestar's data policies and opt-out of interest based
        advertising here:&nbsp;
        <Link className={styles.link} href='https://freestar.io/data-policy/#'>
          https://freestar.io/data-policy/#
        </Link>.
      </p>
      <p className={styles.text}>
        Cookies. We use "cookies" on this site. A cookie is a piece of data
        stored on a site visitor’s hard drive to help us improve your access to
        our site and identify repeat visitors to our site. For instance, when we
        use a cookie to identify you, we can restore your game options and show
        you your game statistics from previous visits. Cookies can also enable
        us to track and target the interests of our users to enhance the
        experience on our site. This information is never shared with anyone
        else.Some of our partners may use cookies on our site (for example,
        advertisers). However, we have no access to or control over these
        cookies.
      </p>
      <p className={styles.text}>
        Your Access and Control Over Information:You may opt out of any future
        contacts from us at any time. You can do the following at any time by
        contacting us via the email address given on our website:
      </p>
      <ul className={styles.list}>
        <li>See what data we have about you, if any.</li>
        <li>Change/correct any data we have about you.</li>
        <li>Have us delete any data we have about you.</li>
        <li>Express any concern you have about our use of your data.</li>
      </ul>
    </>
  );
};

export default PrivacyPolicyContent;
