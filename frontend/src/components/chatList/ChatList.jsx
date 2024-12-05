import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  //solve error displaying on the console
 console.log("what is going on......",error);
 console.log("intended data that will be displayed",data);

  return (
    <div className="chatList">
      <h3 style={{ fontWeight: "bold", fontStyle:"italic", color:"green"}}>DASHBOARD</h3>
      <Link to="/dashboard" target="_blank">Create a new tab</Link>
      <Link to="/">Explore CSEC Chatbot</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? <h3>Something went wrong!</h3>
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to CSEC Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
