import { MoreVert } from '@material-ui/icons'
import React from 'react'
import styles from './style.module.css'

const Post = () => {
  return (
    <div className={styles.post}>
        <div className={styles.postWrapper}>
            <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
          <img src="/assests/person/1.jpeg" alt=""  className={styles.postImg}/>
             <span className={styles.postedBy}>Maram Ismail</span>
             <span className={styles.date}>3 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
            </div>
            <div className={styles.postCenter}>
             <p className={styles.postContent}> This is me first Post ❤ </p>
             <img src="/assests/person/1.jpeg" alt="" className={styles.postContentImg} />
            </div>
            <div className={styles.postBottom}>
        
          <div className={styles.postBottomLeft}>
            <img src="/assests/heart.png" alt=""  className={styles.likeImg}/>
            <img src="/assests/like.png" alt="" className={styles.likeImg}/>
            <span className={styles.postLiked}>30 of people like it </span>
          </div>
          <div className={styles.postBottomRight}>
            20 comments
          </div>
                    
                    
                    </div>
        </div>
    </div>
  )
}

export default Post