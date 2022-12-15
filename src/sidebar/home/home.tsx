import Footer from "../footer/footer";
import HomeMenu from "../home-menu/home-menu";
import Omnichannel from "../omnichannel/omnichannel";
import UserList from "../user-list/user-list";
import './home.css';

function SidebarHome() {

  return (
    <div className="sidebar-main-div">
      <div className="home_menu">
        <HomeMenu/>
      </div>
      <div className="omnichannel">
        <Omnichannel/>
      </div>
      <div className="user_list">
        <UserList/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
     
    </div>
  );
}

export default SidebarHome;
