import React from "react";
import styles from "../../styles/sidemenu.module.css";
const Sidemenu = () => {
  return (
    <div className={styles.sidemenu}>
      <input type="text" placeholder="search..." />
    </div>
  );
};

export default Sidemenu;
