import React from "react";
import ReactVideoGallery from "./components/ReactVideoGallery";
import Player from "./components/ReactVideoPlayer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ReactVideoGallery />} />
        <Route path="/player/:video" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
