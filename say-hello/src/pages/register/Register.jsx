import React from "react";
import styles from "./style.module.css";

const Register = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h1 className={styles.logo}> SayHello</h1>
          <span className={styles.loginDesc}>Say Hello To All World</span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
         
                <input type="text" placeholder="Username" className={styles.loginInput} />
                <input type="email" placeholder="Email" className={styles.loginInput} />
                <input type="password" placeholder="Password" className={styles.loginInput} />
                <button className={styles.btnLogin}>Sign Up</button>
                 <button className={styles.btnRegister}>Sign In </button>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
