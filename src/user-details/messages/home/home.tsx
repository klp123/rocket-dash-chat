import UserList from "../../../sidebar/user-list/user-list";
import ChatBox from "../chat-box/chat-box";
import './home.css';

function MessagesHome() {

  return (
    <div>
      <div className="user_list">
        <UserList />
      </div>
      <div className="chat_box">
        <ChatBox />
      </div>
    </div>
  );
}

export default MessagesHome;
