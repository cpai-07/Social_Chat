import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useDataLayer } from "./Datalayer";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [user, dispatch] = useDataLayer();
  useEffect(() => {
    // inside firestore(database) collection click a snapshot for every changes in the "rooms".Snapshot of each documents has id and its data...ihave to map throgh each doc and grab the id and name.
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    // cleanUp function
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {/* image avatar */}

        <Avatar src={user?.photoURL} />
        {/* Components */}

        <div className="sidebar-headerComponents">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      {/* search bar*/}
      <div className="sidebar-search">
        <SearchOutlined />
        <input placeholder="Search or Start new chat" type="text" />
      </div>

      {/* Sidebar Chat */}
      <div className="sidebar-chat">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
