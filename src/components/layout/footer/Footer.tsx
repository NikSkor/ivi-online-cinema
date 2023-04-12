import styles from './Footer.module.scss';

// data
import { firstColumn, secondColumn } from './linkList/FooterLinkList.data';

// components
import FooterLinkList from './linkList/FooterLinkList';
import FooterSupport from './support/FooterSupport';
import FooterWidget from './widget/FooterWidget';




const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container_inner}>
          <div className={styles.footer_content}>

            <div className={styles.footer__column}>
              <FooterLinkList title={firstColumn.title} links={firstColumn.links} />
            </div>

            <div className={styles.footer__column}>
              <FooterLinkList title={secondColumn.title} links={secondColumn.links} />
              <div className={styles.footer__certificateLinkWrapper}>
                <a href="https://www.ivi.tv/cert" className={styles.footer__certificateLink}>Активация сертификата</a>
              </div>
            </div>

            <div className={styles.footer__column}>
              <FooterSupport />
            </div>

            <div className={styles.footer__column}>
              <FooterWidget />
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer