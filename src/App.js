import React, { useState, useContext } from "react";
import { Router, Link } from "@reach/router";
import Login from "./components/Login";
import DisplayAllPosts from "./components/DisplayAllPosts";
import Signup from "./components/Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faThumbsUp,
  faThumbsDown,
  faSurprise,
} from "@fortawesome/free-solid-svg-icons";
import Post from "./components/Post";

library.add(fab, faThumbsUp, faThumbsDown, faSurprise);

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#000000",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes);

function App() {
  const theme = useContext(ThemeContext);

  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState({
    username: "password",
    Florence: "ofori",
  });
  const [style, setStyle] = useState({
    background: theme.light.background,
    foreground: theme.light.foreground,
  });
  const [color, setColor] = useState("dark");

  const changeThemeHandler = () => {
    if (color === "light") {
      setStyle({
        background: theme.dark.background,
        foreground: theme.dark.foreground,
      });
      setColor("dark");
    } else {
      setStyle({
        background: theme.light.background,
        foreground: theme.light.foreground,
      });
      setColor("light");
    }
  };

  return (
    <ThemeContext.Provider value={themes.dark}>
      <div style={{ background: style.background, color: style.foreground }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            EQ Blog.
            <FontAwesomeIcon icon="surprise" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {isloggedIn === false ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Signup">
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => {
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <Router>
          <Signup
            path="/Signup"
            users={users}
            setUsers={setUsers}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Login path="/Login" users={users} setIsLoggedIn={setIsLoggedIn} />
          <DisplayAllPosts path="/" changeThemeHandler={changeThemeHandler} isloggedIn = {isloggedIn}/>
          <Post path="/post/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
