import React from "react";
import styles from "../../styles/sidemenu.module.css";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Sidemenu = () => {
  const dispatch = useDispatch();
  const searchedcoin = useSelector((custom) => custom.custom.coins);
  const fetchcoin = async (endpoint) => {
    // console.log(endpoint, "endpoint");
    const fetchdata = await fetch(
      `https://api.coingecko.com/api/v3/${endpoint}/`,{
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'*'
          }
          ,
          mode:'cors'
      }
    );
    const fetchres = await fetchdata.json();

    // console.log(fetchres, "fetchres");
  };
  return (
    <div className={styles.sidemenu}>
      <input
        type="text"
        placeholder="search..."
        onChange={async (e) => {
          // console.log(e.target.value, "e.target.value", typeof e.target.value);
          const fetchcoin = await fetch(
            `https://api.coingecko.com/api/v3/search?query=${e.target.value}`,{
              headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'*'
                }
                ,
                mode:'cors'
            }
          );
          const fetchjson = await fetchcoin.json();
          // console.log(fetchjson);
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
                <a
                  onClick={() => {
                    fetchcoin("coins");
                  }}
                >
                  Tokens
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    fetchcoin("coins");
                  }}
                >
                  Coins
                </a>
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
                <a
                  onClick={() => {
                    // console.log(
                    //   searchedcoin,
                    //   typeof searchedcoin,
                    //   "searchedcoin.coins"
                    // );
                    Object.keys(searchedcoin).sort(
                      (a, b) =>
                        b.market_cap_change_percentage_24h -
                        a.market_cap_change_percentage_24h
                    );
                    dispatch({
                      type: "getcoins",
                      payload: searchedcoin,
                    });
                    // console.log(searchedcoin, "searchedcoindd");
                  }}
                >
                  Price change
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    // console.log(
                    //   searchedcoin,
                    //   typeof searchedcoin,
                    //   "searchedcoin.coins"
                    // );
                    Object.keys(searchedcoin).sort(
                      (a, b) => b.market_cap - a.market_cap
                    );
                    dispatch({
                      type: "getcoins",
                      payload: searchedcoin,
                    });
                    // console.log(searchedcoin, "searchedcoindd");
                  }}
                >
                  Market cap
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidemenu;
