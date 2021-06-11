import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import { useDataLayer } from "./Datalayer";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const [user, dispatch] = useDataLayer();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar />
            <Switch>
              {/* sidebar */}
              <Route path="/rooms/:roomId">
                {/* chat */}
                <Chat />
              </Route>
              {/* <Route path="/">
                <Chat />
              </Route> */}
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
