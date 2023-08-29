import "./Profile.css";
import TopBar from "../../Components/Topbar/TopBar";
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import SideBar from "../../Components/SideBar/SideBar";

const Profile = () => {
  return (
    <div>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/8.jpg" alt="" className="profileCoverImg" />
              <img
                src="assets/person/1.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Umer Shah</h4>
              <span className="profileInfoDesc">
                Hi! Frieds i am a web developer
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
