import ContactInformation from "../header/contact-information/contact-information";
import HeaderHome from "../header/header-home/header-home";
import MessagesHome from "../messages/home/home";
import './home.css';

function UserHome() {

  return (
    <div className="user_detail_main_div">
      <div className="header">
        <HeaderHome />
      </div>
      <div className="user_message_div">
        <div className="messages_home">
          <MessagesHome />
        </div>
        <div className="contact_information">
          <ContactInformation />
        </div>
      </div>
    </div>
  );
}

export default UserHome;
