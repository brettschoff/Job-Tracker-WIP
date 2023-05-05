import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useState } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

import userService from "./utils/userService";

function App() {

  const [user, setUser] = useState(userService.getUser())

  function handleSignupOrLogin(){
    setUser(userService.getUser())
  }

  return (
    <Routes>
      <Route path="/" element={<h1>Home Pageeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} loggedUser={user}/> } />
      <Route path='/signup' element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} loggedUser={user} /> } />
    </Routes>
  );
}

export default App;
