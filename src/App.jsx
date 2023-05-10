import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { useState } from 'react'

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import DisplayPage from "./pages/DisplayPage/DIsplayPage";
import CreateApplication from "./pages/CreateApplication/CreateApplication";

import userService from "./utils/userService";
import NotesPage from "./pages/NotesPage/NotesPage";

function App() {

  const [user, setUser] = useState(userService.getUser())

  function handleSignupOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser(null);
  }

  if(user){
  return (
      <Routes>
        <Route path="/" element={<DisplayPage handleLogout={handleLogout} />} />
        <Route path="/login" element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} loggedUser={user}/> } />
        <Route path='/signup' element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} loggedUser={user} /> } />
        <Route path='/new-application' element={<CreateApplication />} />
        <Route path='/application/:id/notes' element={<NotesPage/>} />
      </Routes>
    );
  }
  return(
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
  }

export default App;
