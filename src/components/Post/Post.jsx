import "./Post.css";
import likeIcon from "../../assets/like.png";
import heart from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../../utils/users";
import { useState } from "react";

export default function Post({ post }) {
  const { date, desc, photo, like, comment, userId } = post;

  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === userId)[0].username}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={likeIcon}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={heart}
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{likes} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
