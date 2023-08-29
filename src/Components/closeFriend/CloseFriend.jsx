import "./CloseFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sideBarFriend">
      <img src={user.profilePicture} alt="" className="sideBarFriendImg" />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
