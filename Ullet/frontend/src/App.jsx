import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/ui/Navbar";
import { TokenProvider } from "./contexts/TokenContext";
import { UserProvider } from "./contexts/UserContext";
import { CookiesProvider } from "react-cookie";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import UserPanel from "./views/panel/UserPanel";
import Register from "./views/register/Register";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1 className="container">About</h1>} />
      </Route>

      <Route
        path="/login"
        element={
          <CookiesProvider>
            <TokenProvider>
              <UserProvider>
                <Login />
              </UserProvider>
            </TokenProvider>
          </CookiesProvider>
        }
      />
      <Route
        path="/register"
        element={
          <CookiesProvider>
            <TokenProvider>
              <UserProvider>
                <Register />
              </UserProvider>
            </TokenProvider>
          </CookiesProvider>
        }
      />
      <Route
        path="/panel"
        element={
          <CookiesProvider>
            <TokenProvider>
              <UserProvider>
                <UserPanel />
              </UserProvider>
            </TokenProvider>
          </CookiesProvider>
        }
      />
    </Routes>
  );
}

export default App;
