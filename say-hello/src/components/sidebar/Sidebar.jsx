import React from "react";
import styles from "./style.module.css";
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilled,
  QuestionAnswer,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import Friends from "../friends/Friends";
import {Users} from '../../staticData'
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <RssFeed className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Feed</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Chat className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Chats</span>
          </li>
          <li className={styles.sidebarListItem}>
            <PlayCircleFilled className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Videos</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Group className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Groups</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Bookmark className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Bookmarks</span>
          </li>
          <li className={styles.sidebarListItem}>
            <HelpOutline className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Questions</span>
          </li>
          <li className={styles.sidebarListItem}>
            <WorkOutline className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Jobs</span>
          </li>
          <li className={styles.sidebarListItem}>
            <Event className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Events</span>
          </li>
          <li className={styles.sidebarListItem}>
            <School className={styles.sidebarListItemIcon} />

            <span className={styles.sidebarListItemText}> Courses</span>
          </li>
        </ul>
        <button className={styles.btnShow}>Show More</button>
        <hr />
        <ul className={styles.sidebarFriendList}>
        {
          Users.map((user) =>(
            <Friends user={user} />
          ))
        }
       
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
