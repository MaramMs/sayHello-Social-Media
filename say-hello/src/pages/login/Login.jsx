import React from "react";
import styles from "./style.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h1 className={styles.logo}> SayHello</h1>
          <span className={styles.loginDesc}>Say Hello To All World</span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
         
                <input type="email" placeholder="Email" className={styles.loginInput} />
                <input type="password" placeholder="Password" className={styles.loginInput} />
                <button className={styles.btnLogin}>Login In</button>
                 <span className={styles.forgetPass}>Forget Password</span>
                 <button className={styles.btnRegister}>Create A new Account</button>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
