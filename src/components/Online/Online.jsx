import "./Online.css";

export default function Online({ user }) {
  const { username, profilePicture } = user;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={profilePicture} alt="" className="rightProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{username}</span>
    </li>
  );
}
