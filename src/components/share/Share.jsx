import React from 'react'
import styles from './style.module.css'
import {EmojiEmotions, Label, PermMedia, Room} from '@material-ui/icons'

const Share = () => {
  return (
    <div className={styles.share}>
        <div className={styles.shareWrapper}>
            <div className={styles.shareTop}>
             <img src="/assests/person/1.jpeg" alt="" className={styles.shareImg}/>
             <input type="text" placeholder='Whats your mide ?' className={styles.shareInput}/>
            </div>
            <hr />
            <div className={styles.shareBottom}>
                <div className={styles.shareOptions}>
                    <div className={styles.shareOption}>
                        <PermMedia htmlColor='tomato' className={styles.shareIcon} />
                        <span className={styles.shareText}>photo or video</span>
                    </div>
                    <div className={styles.shareOption}>
                        <Label htmlColor='blue' className={styles.shareIcon} />
                        <span className={styles.shareText}>Tag</span>
                    </div>
                    <div className={styles.shareOption}>
                        <Room htmlColor='green' className={styles.shareIcon} />
                        <span className={styles.shareText}>Location</span>
                    </div>
                    <div className={styles.shareOption}>
                        <EmojiEmotions  htmlColor='goldenrod' className={styles.shareIcon} />
                        <span className={styles.shareText}>Feelings</span>
                    </div>


                </div>
                <button className={styles.btnShare}> Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share