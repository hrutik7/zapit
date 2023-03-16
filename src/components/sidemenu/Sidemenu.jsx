import React from "react";
import styles from "../../styles/sidemenu.module.css";
const Sidemenu = () => {
  return (
    <div className={styles.sidemenu}>
      <input type="text" placeholder="search..." />
      <nav>
      <ul>
      
        <li><a>Type of currency</a>
          <ul>
            <li><a>Tokens</a></li>
            <li><a>Coins</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Sidemenu;
