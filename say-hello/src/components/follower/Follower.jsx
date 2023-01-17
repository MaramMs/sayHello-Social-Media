import React from 'react'
import styles from './style.module.css'
const Follower = ({user}) => {
  return (
<div className={styles.profileFollowing}>
            <img
              src={user?.profilePicture}
              alt=""
              className={styles.followerImg}
            />
            <span className={styles.followerName}>{user.username}</span>
          </div>
  )
}

export default Follower
