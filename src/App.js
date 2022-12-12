import "./App.css";
import React, { useState } from "react";
import Header from "./Layout/Header";
import Items from "./Components/UI/Items";
import { DATA } from "./Database";
import Wrapper from "./Components/UI/Wrapper";
import AddItem from "./Pages/AddItem";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
    <Header />
    <Routes>
    <Route path="additem" element={<AddItem />} />
    <Route path="/" element={<div><ul className="slider">
        <li>slider</li>
      </ul> <Wrapper>
      </Wrapper></div>}/>
    </Routes>
    </div>
  );
}

export default App;
