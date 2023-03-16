import React, { useEffect ,useState} from "react";
import styles from "../../styles/currency.module.css";
const Currency = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    cryptoCall()
  },[]);

  const cryptoCall = async ()=>{
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
      ,
      mode:'cors'
  })
    
  const result = await res.json()

  setData(result)
  console.log(result,"result")
  }
  return (
    <div className={styles.currency}>
      <div className={styles.currency_header}>
        <div className={styles.srno}>
          Sr No.
        </div>
        <div className={styles.Name}>
          Name
        </div>
        <div className={styles.marcketcap}>
          Marcket Cap
        </div>
      </div>
      {
        // console.log(data,"data")
        data.map((data,key=>{
         return(
          <>
          <div className={styles.currency_header_c} key={key}>
        <div className={styles.srno_c}>
          {key.market_cap_rank}
        </div>
        <div className={styles.Name_c}>
        {key.name}
        </div>
        <div className={styles.marcketcap_c}>
          {key.market_cap}
        </div>
      </div>


          </>
         )
        }))
      }
    </div>
  )
};

export default Currency;
