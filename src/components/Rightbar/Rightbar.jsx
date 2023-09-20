import "./Rightbar.css";
import birthdayImg from "../../assets/gift.png";
import Adsense from "../../assets/ad.png";
import { Users } from "../../../utils/users";
import Online from "../Online/Online";

import yonathan from "../../assets/person/yonathan.jpg";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Santo Domingo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Monsenor Nouel</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={yonathan} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Yonathan Acevebdo</span>
          </div>
          <div className="rightbarFollowing">
            <img src={yonathan} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Yonathan Acevebdo</span>
          </div>
          <div className="rightbarFollowing">
            <img src={yonathan} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Yonathan Acevebdo</span>
          </div>
          <div className="rightbarFollowing">
            <img src={yonathan} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Yonathan Acevebdo</span>
          </div>
          <div className="rightbarFollowing">
            <img src={yonathan} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Yonathan Acevebdo</span>
          </div>
          <div className="rightbarFollowing">
            <img src={yonathan} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Yonathan Acevebdo</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
