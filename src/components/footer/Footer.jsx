import React from 'react'
import styles from "../../styles/footer.module.css"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
   <>
    {/* <div className={styles.logo}>CoinWatch</div> */}
    <div>
      {/* <h1>Social Flow</h1> */}
      <p className={styles.socialcontainer}>
        
        <a
          href="https://www.facebook.com/"
          className={styles.facebook}
        >
          <FontAwesomeIcon icon={faFacebook} size="xs" />
        </a>
        <a
          href="http://www.instagram.com"
          className={styles.instagram}
        >
          <FontAwesomeIcon icon={faInstagram} size="xs" />
        </a>
        <a
          href="http://www.instagram.com"
          className={styles.instagram}
        >
          <FontAwesomeIcon icon={faLinkedin} size="xs" />
        </a>
        <a href="https://wwww.twitter.com" className={styles.twitter}>
          <FontAwesomeIcon icon={faTwitter} size="xs" />
        </a>
      </p>
    </div>
   </>
  )
}

export default Footer