// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPlayers from './listplayers'; // Import the ListPlayers component

function App() {
    return (
        <Routes>

              <Route path="/" element={<ListPlayers />} />
              
        </Routes>
    );
}

export default App;
