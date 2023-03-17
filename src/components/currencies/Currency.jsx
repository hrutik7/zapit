import React, { useEffect ,useState} from "react";
import styles from "../../styles/currency.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Currency = () => {
  const [data,setData] = useState([])
  const searchedcoin = useSelector(custom => custom.custom.coins)
  useEffect(() => {
    cryptoCall()
  },[]);
  const dispatch = useDispatch()
  console.log(searchedcoin,typeof(searchedcoin),"searchedcoin")
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
  dispatch({
    type:"getcoins",
    payload:result
  })
  setData(searchedcoin)
  console.log(searchedcoin,typeof(searchedcoin),"result")
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
      { console.log(searchedcoin,"searchedcoinsearchedcoin")}
      {
        
       searchedcoin.map((searchedcoin,key=>{
         
         return(
          <>
          <div className={styles.currency_header_c} key={key.market_cap_rank}>
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
