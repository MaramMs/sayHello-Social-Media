import React from "react";
import Online from "../online/Online";
import styles from "./style.module.css";
import {Users} from '../../staticData.js'

const Rightbar = () => {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        <div className={styles.birthdayFirend}>
          <img
            src="/assests/gift.png"
            alt=""
            className={styles.giftFriendsImg}
          />
          <p className={styles.friendName}>
            {" "}
            <b> Ayha</b> and <b> 3 other friends</b> have a birthday to day{" "}
          </p>
        </div>
    
          <img src="/assests/ad.png" alt="" className={styles.adImg} />
     

        <h4 className={styles.frindsOnline}>Online Friends</h4>

        <ul className="onlineFriendsList">
          {/* <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li> */}
          {
            Users.map((user)=>(
              <Online user={user}/>
            ))
          }
      
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
