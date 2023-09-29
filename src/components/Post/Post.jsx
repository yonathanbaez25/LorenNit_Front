import "./Post.css";
import likeIcon from "../../assets/like.png";
import heart from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../assets/person/avatar.png";
import { format } from "timeago.js";

export default function Post({ post }) {
  const { createdAt, desc, img, likes, comment, userId } = post;
  const URL = "http://localhost:8800/api";

  const [like, setLike] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${URL}/users/${userId}`);
      setUser(res.data);
    };

    fetchUser();
  }, []);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture || avatar}
              alt=""
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={img} alt="" />
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
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
