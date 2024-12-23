import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SignInForm from "./Pages/Signin/SignInForm";
import SignupForm from "./Pages/Signup/SignupForm";
import Track from "./Pages/Track/Track";
import Publish from "./Pages/Publish/Publish";
import FindJournal from "./Pages/FindJournal/FindJournal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignInForm />} />
      <Route path="/sign-up" element={<SignupForm />} />
      <Route path="/track" element={<Track />} />
      <Route path="/publish" element={<Publish />} />
      <Route path="/find-journal" element={<FindJournal />} />
      <Route path="/SignInForm" element={<SignInForm />} />
      <Route path="/SignupForm" element={<SignupForm />} />

    </Routes>
  );
};

export default App;
