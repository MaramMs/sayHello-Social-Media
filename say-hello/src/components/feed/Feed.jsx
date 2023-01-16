import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import styles from './style.module.css'
import {Posts} from '../../staticData.js'

const Feed = () => {
  return (
    <div className={styles.feed}>
      <Share />
      {
        Posts.map((post) =>(
          <Post post={post} key={post.id}/>

        ))
      }
   
    </div>
  )
}

export default Feed