import "./TopBar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div>
      <div className="topBarContainer">
        <div className="topBarLeft">
          <span className="logo">LamaSocial</span>
        </div>
        <div className="topBarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends,posts or videos"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">HomePage</span>
            <span className="topBarLink">TimeLine</span>
          </div>
          <div className="topBarIcons">
            <div className="topBarItem">
              <Person />
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarItem">
              <Chat />
              <span className="topBarIconBadge">2</span>
            </div>
            <div className="topBarItem">
              <Notifications />
              <span className="topBarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpg" className="topBarImg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
