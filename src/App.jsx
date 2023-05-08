import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useState } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import DisplayPage from "./pages/DisplayPage/DIsplayPage";
import CreateApplication from "./pages/CreateApplication/CreateApplication";

import userService from "./utils/userService";

function App() {

  const [user, setUser] = useState(userService.getUser())

  function handleSignupOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.login();
    setUser(null);
  }

  return (
    <Routes>
      <Route path="/" element={<DisplayPage handleLogout={handleLogout} />} />
      <Route path="/login" element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} loggedUser={user}/> } />
      <Route path='/signup' element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} loggedUser={user} /> } />
      <Route path='/new-application' element={<CreateApplication />} />
    </Routes>
  );
}

export default App;
