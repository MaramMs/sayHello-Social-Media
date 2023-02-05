import React from "react";
import Online from "../online/Online";
import styles from "./style.module.css";
import { Users } from "../../staticData.js";
import Follower from "../follower/Follower";

const Rightbar = ({profile}) => {
  const RightbarHome = () => {
    return (
      <>
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
          {Users.map((user) => (
            <Online user={user} />
          ))}
        </ul>
      </>
    );
  };

  const RightbarProfile = () => {
    return (
      <>
        <h4 className={styles.profileTitle}> User Information</h4>
        <div className="info">
          <div className={styles.profileInfo}>
            <span className={styles.profileInfoKey}>Country: </span>
            <span className={styles.profileInfoValue}>Palestine</span>
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileInfoKey}>City: </span>
            <span className={styles.profileInfoValue}> Gaza </span>
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileInfoKey}>Major: </span>
            <span className={styles.profileInfoValue}>React Developer</span>
          </div>
        </div>
        <h4 className={styles.profileFriends}>User Friends</h4>
        <div className={styles.profileFollowings}>
          {Users.map((user) => (
            <Follower user={user} key={user.id} />
          ))}
        </div>
      </>
    );
  };
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}>
        {
          profile ? (

            <RightbarProfile />
          ):(

            <RightbarHome />
          ) 
        }

      </div>
    </div>
  );
};

export default Rightbar;
