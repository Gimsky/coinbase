import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Components
import Preload from "./Components/Preload/Preload";
import GetStarted from "./Components/GetStarted/GetStarted";
import UserName from "./Components/UserName/UserName";
import Privacy from "./Components/Privacy/Privacy";
import Protect from "./Components/Protect/Protect";
import Pin from "./Components/Pin/Pin";
import Restore from "./Components/Restore/Restore";
import SignIn from "./Components/Restore/Sign-in/SignIn";
import Wallet from "./Components/Wallet/Wallet";

export default function App() {
  const routes = [
    { path: "/", name: "Preload", Component: Preload },
    { path: "/get-started", name: "Get started", Component: GetStarted },
    { path: "/username", name: "Username", Component: UserName },
    { path: "/privacy", name: "Privacy", Component: Privacy },
    { path: "/protect", name: "Protect", Component: Protect },
    { path: "/protect/pin", name: "Pin", Component: Pin },
    { path: "/wallet", name: "Wallet", Component: Wallet },
    { path: "/restore", name: "Restore", Component: Restore },
    { path: "/restore/sign-in", name: "Sign in", Component: SignIn },
  ];

  return (
    <Router>

      {/* ROUTE NAVIGATION */}
      {/* <nav>
        <ul>
          {routes.map((route) => (
            <li>
              <Link key={route.path} to={route.path} exact>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}

      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </Router>
  );
}
