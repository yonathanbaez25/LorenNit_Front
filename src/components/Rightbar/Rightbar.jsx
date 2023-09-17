import "./Rightbar.css";
import birthdayImg from "../../assets/gift.png";
import Adsense from "../../assets/ad.png";
import { Users } from "../../../utils/users";
import Online from "../Online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={birthdayImg} alt="" />
          <span className="birthdayText">
            <b>Brigitte Rodriguez</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img src={Adsense} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="onlineFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
