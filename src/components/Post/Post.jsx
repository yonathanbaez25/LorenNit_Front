import "./Post.css";
import profileImg from "../../assets/person/yonathan.jpg";
import postImg from "../../assets/post/post1.jpeg";
import likeIcon from "../../assets/like.png";
import heart from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../../utils/users";

export default function Post({ post }) {
  const { date, desc, photo, like, comment, userId } = post;

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
            <img className="likeIcon" src={likeIcon} alt="" />
            <img className="likeIcon" src={heart} alt="" />
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
