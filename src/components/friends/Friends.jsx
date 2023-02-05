import styles from './style.module.css'
const Friends = ({user}) => {
  return (
    <li className={styles.sidebarFriendListItem}>
    <img
      src={user.profilePicture}
      alt=""
      className={styles.friendImg}
    />
    <span className={styles.firendName}>{user.username}</span>
  </li>

  )
}

export default Friends