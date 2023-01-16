import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import styles from './style.module.css'

const Feed = () => {
  return (
    <div className={styles.feed}>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed