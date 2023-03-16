import React, { useEffect } from "react";
import styles from "../../styles/currency.module.css";
const Currency = () => {
  useEffect(() => {
    cryptoCall()
  });

  const cryptoCall = async ()=>{
  const res = await  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    
  const result = await res.json()

  console.log(result,"result")
  }
  return <div className={styles.currency}>Currency</div>;
};

export default Currency;
