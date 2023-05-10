import styles from './Footer.module.scss';

// data
import { firstColumn, secondColumn } from './linkList/FooterLinkList.data';
import { storesList } from './storeBtn/stores.data';
import { socials } from './socialLink/social.data';

// components
import FooterLinkList from './linkList/FooterLinkList';
import FooterSupport from './support/FooterSupport';
import FooterWidget from './widget/FooterWidget';
import StoreBtn from './storeBtn/StoreBtn';
import SocialLink from './socialLink/SocialLink';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__container_inner}>
          <div className={`${styles.footer_content} ${styles.fourColumn}`}>

            <div className={styles.footer__column}>
              <FooterLinkList title={firstColumn.title} enTitle={firstColumn.enTitle} links={firstColumn.links} />
            </div>

            <div className={styles.footer__column}>
              <FooterLinkList title={secondColumn.title} enTitle={secondColumn.enTitle} links={secondColumn.links} />
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

      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__container_inner}>
          <div className={`${styles.footer_content} ${styles.twoColumn}`}>

            <div className={styles.footer__column}>
              <div className={styles.footer__stores}>
                {
                  storesList.map((store) => (
                    <StoreBtn
                      key={store.linkURL}
                      linkURL={store.linkURL}
                      imgURL={store.imgURL}
                      caption={store.caption}
                      preamble={store.preamble}
                    />
                  ))
                }
              </div>
              <div className={styles.copyrights}>
                <p>© 2023 ООО «Иви.ру»</p>
                <p>HBO <sup>®</sup> and related service marks are the property of Home Box Office, Inc</p>
              </div>
            </div>

            <div className={styles.footer__column}>
              <div className={styles.social}>
                {
                  socials.map((item) => (
                    <SocialLink 
                      key={item.socialURL} 
                      socialURL={item.socialURL} 
                      imgURL={item.imgURL}
                    />
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer