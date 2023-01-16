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
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>

          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>

          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>

          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>

          <li className={styles.sidebarFriendListItem}>
            <img
              src="/assests/person/1.jpeg"
              alt=""
              className={styles.friendImg}
            />
            <span className={styles.firendName}>Maram</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
