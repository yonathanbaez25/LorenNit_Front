import "./CloseFriend.css";

export default function CloseFriend({ user }) {
  const { username, profilePicture } = user;
  return (
    <li className="sidebarFriend">
      <img src={profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{username}</span>
    </li>
  );
}
