import { MoreVert } from "@material-ui/icons";
import React from "react";
import styles from "./style.module.css";
import { Users } from "../../staticData.js";
import { useState } from "react";

const Post = ({ post }) => {
  const [like , setLike] = useState(post.like)
  const [isLiked , setIsLiked] = useState(false)
  const HandleLike =() =>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <div className={styles.postTop}>
          <div className={styles.postTopLeft}>
            <img
              src=  {Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
              className={styles.postImg}
            />
            <span className={styles.postedBy}>
              {" "}
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className={styles.date}> {post.date} </span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className={styles.postCenter}>
          <p className={styles.postContent}> {post.desc} </p>
          <img
            src={post.photo}
            alt=""
            className={styles.postContentImg}
          />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.postBottomLeft}>
            <img src="/assests/heart.png" alt="" className={styles.likeImg} onClick={HandleLike} />
            <img src="/assests/like.png" alt="" className={styles.likeImg} onClick={HandleLike}/>
            <span className={styles.postLiked}>
              {like} of people like it{" "}
            </span>
          </div>
          <div className={styles.postBottomRight}>{post.comment} comments</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
