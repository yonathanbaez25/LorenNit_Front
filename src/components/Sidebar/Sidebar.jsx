import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  VideoLibrary,
  Groups,
  Bookmark,
  Help,
  Work,
  CalendarMonth,
  School,
} from "@mui/icons-material";
import BrilliFriend from "../../assets/person/Brilli.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarts</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonth className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
          <li className="sidebarFriend">
            <img src={BrilliFriend} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Brilli Rodriguez</span>
          </li>
        </ul>
      </div>
    </div>
  );
}