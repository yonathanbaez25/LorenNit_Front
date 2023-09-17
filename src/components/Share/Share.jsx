import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import profileImg from "../../assets/person/yonathan.jpg";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={profileImg} alt="" className="shareProfileImg" />
          <input
            placeholder="What's is in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOtionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOtionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOtionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOtionText">Feelings</span>
            </div>
          </div>
          <button className="shareButtom">Share</button>
        </div>
      </div>
    </div>
  );
}
