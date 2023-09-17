import "./Post.css";
import profileImg from "../../assets/person/yonathan.jpg";
import postImg from "../../assets/post/post1.jpeg";
import like from "../../assets/like.png";
import heart from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profileImg} alt="" />
            <span className="postUsername">Yonathan Acevedo</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first Post :)</span>
          <img className="postImg" src={postImg} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={like} alt="" />
            <img className="likeIcon" src={heart} alt="" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
