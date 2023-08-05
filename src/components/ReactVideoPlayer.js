import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

//media
import img1 from "../video/1.PNG";
import video1 from "../video/1.mp4";
import img2 from "../video/2.PNG";
import video2 from "../video/2.mp4";
import img3 from "../video/3.PNG";
import video3 from "../video/3.mp4";
import img4 from "../video/4.PNG";
import video4 from "../video/4.mp4";
import img5 from "../video/5.PNG";
import video5 from "../video/5.mp4";
import img6 from "../video/6.PNG";
import video6 from "../video/6.mp4";

const ReactVideoPlayer = () => {
  const location = useLocation();
  const { from: video_name } = location.state;
  const [thumbnail, setThumbnail] = useState(null);
  const [video_url, setVideoUrl] = useState(null);

  let data = {
    1: {
      thumbnail: img1,
      videoUrl: video1,
    },
    2: {
      thumbnail: img2,
      videoUrl: video2,
    },
    3: {
      thumbnail: img3,
      videoUrl: video3,
    },
    4: {
      thumbnail: img4,
      videoUrl: video4,
    },
    5: {
      thumbnail: img5,
      videoUrl: video5,
    },
    6: {
      thumbnail: img6,
      videoUrl: video6,
    },
  };

  useEffect(() => {
    fetch();
  }, [video_name]);

  const fetch = () => {
    const str1 = video_name.replace(/\D/g, "");
    setThumbnail(data[str1].thumbnail);
    setVideoUrl(data[str1].videoUrl);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{video_name}</h1>
      <div style={{ width: "80%", height: "80%", margin: "auto" }}>
        <ReactPlayer
          className="react-player"
          poster={thumbnail}
          url={video_url}
          muted
          autoplay
          loop
          playing
          width="100%"
          height="100%"
          controls={true}
        />
        <button
          style={{
            width: "100px",
            height: "50px",
            background: "#49c8ef",
            fontSize: "16px",
            fontFamily: "monospace",
            fontWeight: "bold",
          }}
          onClick={() => (window.location.href = "/")}
        >
          back
        </button>
      </div>
    </>
  );
};

export default ReactVideoPlayer;
