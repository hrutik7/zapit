import React from "react";
import styles from "../../styles/sidemenu.module.css";

import { useDispatch } from "react-redux";
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

    <nav>
      <ul>
      
        <li><a>sort by ...</a>
          <ul>
            <li><a>Price change</a></li>
            <li><a>Market cap</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Sidemenu;
