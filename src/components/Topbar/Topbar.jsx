import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import img from "../../assets/person/yonathan.jpg";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LorenNit Social App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="tobarIconBage">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="tobarIconBage">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="tobarIconBage">1</span>
          </div>
        </div>
        <img src={img} alt="" className="topbarImg" />
      </div>
    </div>
  );
}
