import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import styles from "./style.module.css";
const Profile = () => {
  return (
    <>
      <TopBar />
      <div className={styles.profile}>
        <Sidebar />

        <div className={styles.rightProfile}>
          <div className={styles.topRightProfile}>
            <div className={styles.profileImgCover}>
                <img src="/assests/posts/3.jpeg" alt=""  className={styles.coverImg}/>
                <img src="/assests/person/2.jpeg" alt="" className={styles.profileImg}/>
            </div>
          </div>

          <div className={styles.profileInfo}>
            <span className={styles.userName}>
maram
            </span>
            <span className={styles.userDesc}>
i'm here
            </span>
          </div>
          <div className={styles.bottomRightProfile}>
          <Feed />
          <Rightbar />
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Profile;
