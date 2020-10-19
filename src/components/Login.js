import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { navigate } from "@reach/router";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { users, setIsLoggedIn } = props;

  function checkLogin() {
    const userExists = users[userName];
    if (!userExists) {
      alert("Invalid username");
      return;
    }

    if (userExists !== password) {
      alert("Invalid password");
      return;
    }

    alert("Login Successful");

    setIsLoggedIn(true);
    
    navigate("/");
  }

  return (
    <>
      <Modal.Dialog>
        <Modal.Body>
          <Modal.Title className = "text-center">Login</Modal.Title>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              style={{ padding: "5px" }}
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <br />
            <br />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              style={{ padding: "5px" }}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
            <br />
            <br />
            <input className = "btn btn-secondary align-self-center" style={{position: "center"}} onClick={checkLogin} type="button" value="Login"></input>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
}
