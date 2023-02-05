import styles  from './style.module.css'
const Online = ({user}) => {
  return (
    <li className={styles.onlineFriendsItem}>
    <div className={styles.onlineFriendsContainer}>
      <img src={user.profilePicture} alt="" className={styles.onlineFriendsImg}/>
      <span className={styles.online}></span>
      <span>{user.username}</span>
    </div>
  </li>
  )
}

export default Online