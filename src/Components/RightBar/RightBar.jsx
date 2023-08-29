import "./RightBar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function RightBar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthDayContainer">
          <img src="assets/gift.jpg" alt="" className="birthDayImg" />
          <span className="birthDayText">
            <b>Umair</b> & <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightBarAd" />
        <h3 className="rightBarTitle">Online friends</h3>
        <ul className="rightBarFriendList">
          {Users.map((p) => (
            <Online key={p.id} user={p} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">RelationShip:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="assets/person/5.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Anaaya</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/4.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Gul</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/7.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jan</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/4.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Anoe</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/2.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Sano</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/9.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Cathy</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/10.jpg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Jony</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
