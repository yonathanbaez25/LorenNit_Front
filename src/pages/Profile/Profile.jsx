import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Profile.css";
import CoverImg from "../../assets/post/post3.jpeg";
import ProfileImg from "../../assets/person/yonathan.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({});
  const URL = "http://localhost:8800/api";

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${URL}/users/?username=brilli`);
      setUser(res.data);
    };

    fetchUser();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={CoverImg} alt="" className="profileCoverImg" />
              <img src={ProfileImg} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Yonathan" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
