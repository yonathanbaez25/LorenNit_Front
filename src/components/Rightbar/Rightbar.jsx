import "./Rightbar.css";
import birthdayImg from "../../assets/gift.png";
import Adsense from "../../assets/ad.png";
import brilli from "../../assets/person/Brilli.jpeg";

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={brilli} alt="" className="rightProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Brillite Rodriguez</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={brilli} alt="" className="rightProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Brillite Rodriguez</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={brilli} alt="" className="rightProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Brillite Rodriguez</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={brilli} alt="" className="rightProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Brillite Rodriguez</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={brilli} alt="" className="rightProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Brillite Rodriguez</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
