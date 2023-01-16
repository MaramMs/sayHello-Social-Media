import React from "react";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import styles from "./style.module.css";
function TopBar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>SayHello</span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <Search className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search friends , posts , group ,..."
            className={styles.search}
          />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <span className={styles.topbarLink}>HomePage</span>
          <span className={styles.topbarLink}>Timeline</span>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarItem}>
            <Person />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
          <div className={styles.topbarItem}>
            <Chat />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
          <div className={styles.topbarItem}>
            <Notifications />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
        </div>
        <img src='/assests/person/1.jpeg' alt="" className={styles.topbarImg}/>

      </div>
    </div>
  );
}

export default TopBar;
