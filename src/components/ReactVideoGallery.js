import React, { useState, createRef } from "react";
import { Link } from "react-router-dom";
//custom css
import "./react-video-gallery.css";

//media
import img1 from "../video/1.PNG";

import img2 from "../video/2.PNG";

import img3 from "../video/3.PNG";

import img4 from "../video/4.PNG";

import img5 from "../video/5.PNG";

import img6 from "../video/6.PNG";

const ReactVideoGallery = () => {
  let data = [
    {
      thumbnail: img1,

      name: "video1",
    },
    {
      thumbnail: img2,

      name: "video2",
    },
    {
      thumbnail: img3,

      name: "video3",
    },
    {
      thumbnail: img4,

      name: "video4",
    },
    {
      thumbnail: img5,

      name: "video5",
    },
    {
      thumbnail: img6,

      name: "video6",
    },
  ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Video Gallery</h1>
      <div className="gallery">
        {data.map((items, key) => {
          return (
            <div className="video" key={key}>
              <div className="video-container">
                <Link to={`/player/${items.name}`} state={{ from: items.name }}>
                  <img style={{ width: "100%" }} src={items.thumbnail} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReactVideoGallery;
