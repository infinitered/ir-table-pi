import React from "react";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <ReactPlayer
        url="https://s3.us-east-1.amazonaws.com/ir_public/media/RNR-Promotion-Video.mp4"
        playing
        loop
        muted
        controls
        width="100%"
        height="100vh"
      />
    </div>
  );
}

export default App;
