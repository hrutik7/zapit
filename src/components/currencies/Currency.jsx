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
  })
    
  const result = await res.json()

  setData(result)
  console.log(result[0],"result")
  }
  return (
    <div className={styles.currency}>
      {
        data.map((data,key)=>{
          console.log(key,data.id)
        })
      }
    </div>
  )
};

export default Currency;
