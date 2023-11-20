import Link from 'next/link';
import styles from '@/app/typography.module.css';

const termsOfUseContent = () => {
  return (
    <>
      <h1 className={styles.heading}>Terms of use</h1>
      <p className={styles.text}>
        Start playing unlimited games of online Solitaire Turn 3. Use hints and
        undos to help progress though that game. No download or email
        registration is required.
      </p>
      <p className={styles.text}>&nbsp;</p>
      <p className={styles.text}>What is Turn 3 Solitaire?</p>
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
        <Link
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
          href='https://policies.google.com/?hl=en'
        >
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
          target='_blank'
          rel='noopener noreferrer'
          href='http://optout.networkadvertising.org/?c=1#!/'
        >
          http://optout.networkadvertising.org/?c=1#!/
        </Link>
        . We partner with Freestar to show advertising on this website.You can
        learn about Freestar's data policies and opt-out of interest based
        advertising here:&nbsp;
        <Link
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
          href='https://freestar.io/data-policy/#'
        >
          https://freestar.io/data-policy/#
        </Link>
        .
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
      <p className={styles.text}>
        Links. This website contains links to other sites. Please be aware that
        we are not responsible for the content or privacy practices of such
        other sites. We encourage our users to be aware when they leave our site
        and to read the privacy statements of any other site that collects
        personally identifiable information.
      </p>
      <p className={styles.text}>
        If you feel that we are not abiding by our privacy practices, or have
        any questions or concerns, please contact us immediately.
      </p>
      <p className={styles.text}>&nbsp;</p>
      <p className={styles.text}>Updates</p>
      <p className={styles.text}>
        Our Privacy Policy may change from time to time and all the updates will
        be posted on this page.
      </p>
      <ul className={styles.list}>
        <li>
          FEB 06, 2019: Major update to include language as to what data is
          collected and why, what control users have over said data, how the
          data is shared and with whome and and included several links to third
          party data policies and opt out forms.
        </li>
        <li>
          SEP 12, 2018: Privacy page is now HTML and added opt out links for
          various advertisers.
        </li>
        <li>AUG 31, 2018: The Facebook like button has been removed.</li>
        <li>
          MAY 22, 2018: I now use Freestar as the ad provider now. I also use
          Google Analytics. I also now set a cookie to help save your options
          for future visits.
        </li>
        <li>
          JAN 01, 2018: If in the future the entire website is transferred to a
          new owner, the user database would be included in the transfer as part
          of the "entire website".
        </li>
        <li>
          FEB 03, 2015: If I receive an official court ordered subpoena for user
          information, under United States law I will be required to give out
          the requested user information.
        </li>
      </ul>
    </>
  );
};

export default termsOfUseContent;
