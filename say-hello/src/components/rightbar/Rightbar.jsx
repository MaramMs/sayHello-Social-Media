import React from "react";
import styles from "./style.module.css";

const Rightbar = () => {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        <div className={styles.birthdayFirend}>
          <img
            src="/assests/gift.png"
            alt=""
            className={styles.giftFrinedImg}
          />
          <p className={styles.freindName}>
            {" "}
            <b> Ayha</b> and <b> 3 other firends</b> birthay to day{" "}
          </p>
        </div>
        <div className={styles.ads}>
          <img src="/assests/ad.png" alt="" className={styles.adImg} />
        </div>

        <h4 className={styles.frindsOnline}>Online Friends</h4>

        <ul className="onlineFriendsList">
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
          <li className={styles.onlineFriendsItem}>
            <div className={styles.onlineFriendsContainer}>
              <img src="/assests/person/1.jpeg" alt="" className={styles.onlineFriendsImg}/>
              <span className={styles.online}></span>
              <span>Ayha</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
