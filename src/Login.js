import { Button } from "@material-ui/core";
import React from "react";
import { useDataLayer } from "./Datalayer";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const [user, dispatch] = useDataLayer();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        {/* logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
          alt=""
        />
        {/* login text */}
        <div className="login-text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        {/* Button */}
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
