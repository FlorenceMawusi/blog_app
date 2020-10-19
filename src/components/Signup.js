import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { navigate } from "@reach/router";

export default function Signup(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {users, setIsLoggedIn} = props;

  function checkSignup() {
    const userExists = users[userName];
    if (userExists) {
      alert("Username already exists");
    }

    users[userName] = password;
    alert("Sign In Successful");
    setIsLoggedIn(true);
    navigate("/");
  }

  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <Modal.Title className="text-center">Sign Up</Modal.Title>
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
            <input
              className="btn btn-secondary align-self-center"
              style={{ position: "center" }}
              onClick={checkSignup}
              type="button"
              value="Sign up"
            ></input>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}
