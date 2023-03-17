import React from "react";
import styles from "../../styles/sidemenu.module.css";

import { useDispatch } from "react-redux";
const Sidemenu = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidemenu}>
      <input
        type="text"
        placeholder="search..."
        onChange={async (e) => {
          console.log(e.target.value, "e.target.value", typeof e.target.value);
          const fetchcoin = await fetch(`https://api.coingecko.com/api/v3/search?query=${e.target.value}`)
          const fetchjson = await fetchcoin.json()
          console.log(fetchjson)
          dispatch({
            type: "findcoins",
            payload: e.target.value,
          });

          dispatch({
            type: "getcoins",
            payload: fetchjson.coins,
          });
        }}
      />
      <nav>
        <ul>
          <li>
            <a>Type of currency</a>
            <ul>
              <li>
                <a>Tokens</a>
              </li>
              <li>
                <a>Coins</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <a>sort by ...</a>
            <ul>
              <li>
                <a>Price change</a>
              </li>
              <li>
                <a>Market cap</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidemenu;
