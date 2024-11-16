import React, { useEffect, useState } from "react";
import Img1 from "../images/1.png";
import Cinema from "../images/cinema.png";
import Dog from "../images/dog.png";
import Glare from "../images/glare.png";
import Shine from "../images/shine.png";
import Snowy from "../images/snowy.png";
import Star from "../images/star.png";
import Surprise from "../images/surprise.png";
import Villa from "../images/villa.png";
import ImageEnlarge from "./ImageEnlarge";
import PinkCheckered from "../images/pink-checkered.jpg";
import WowSound from "../sounds/wow-sound.mp3";
import SurpriseNoobSound from "../sounds/surprise-noob-sound.mp3";
import SurpriseImg from "../images/surprise-img.png";
import CinemaImg from "../images/cinema-img.jpg";
import VillaImg from "../images/villa-img.jpg";
import DogImg from "../images/dog-img.jpg";
import FunThingsCollage from "../images/fun-things-collage.png";
import GraduationCollage from "../images/graduation-collage.png";
import SnowImg from "../images/snow-img.png";
import NightImg from "../images/night-img.jpg";
import TrailerOfLife from "../images/trailer-of-life.mp4";

export default function MemoryLane() {
  const [btnClick, setBtnClick] = useState(false);
  const [imgArray, setImgArray] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [surprisePopupClass, setSurprisePopupClass] = useState("");
  function revealImg(idx: number) {
    setBtnClick(true);
    setImgArray((prev) => {
      return prev.map((clicked, i) => (i === idx ? true : clicked));
    });
  }

  function closePopup(idx: number) {
    setBtnClick(false);
    setImgArray((prev) => {
      return prev.map((clicked, i) => (i === idx ? false : clicked));
    });
  }

  function surprisePopup() {
    const i = Math.floor(Math.random() * 50);
    const j = Math.floor(Math.random() * 50);

    const popupElem = document.getElementById("surprise-popup");
    if (popupElem !== null) {
      popupElem.style.right = i + "%";
      popupElem.style.bottom = j + "%";
    }
  }

  useEffect(() => {
    setInterval(() => {
      setSurprisePopupClass("");
      // new Audio(SurpriseNoobSound).play();
      // console.log(surprisePopupClass);
      setTimeout(() => {
        setSurprisePopupClass("surprise-popup-div");
      }, 120000);
    }, 300000);
  });

  useEffect(() => {
    if (btnClick) {
      new Audio(WowSound).play();
    }
  }, [btnClick]);

  return (
    <div className="memory-lane">
      <div>
        Welcome to Memory Lane Island! 🌴✨ Here, amidst memories galore, you’ll
        find exciting surprises. 🎉 Watch out for surprise pop-ups, and keep
        your wits in place. Ready to go down Memory Lane and take on this
        rollercoaster full of memories? Let the adventure begin! 🎢
      </div>

      {/* Surprise Popup */}
      <div className={surprisePopupClass}>
        <div className="icon-secret-img">
          <div onClick={() => revealImg(0)}>
            <div
              id="surprise-popup"
              className="surprise-popup"
              onMouseOver={surprisePopup}
            >
              <button>
                <img className="icon-secret" src={Surprise} alt="surprise" />
              </button>
            </div>
          </div>
          <div className={imgArray[0] ? "secret-img" : "no-img"}>
            <div className="secret-img-inner">
              <button onClick={() => closePopup(0)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <img src={SurpriseImg} alt="img1" className="secret-img-class" />
            </div>
          </div>
        </div>
      </div>

      <div className="icon-secret-div-1">
        <ImageEnlarge
          revealImg={() => revealImg(1)}
          closePopup={() => closePopup(1)}
          secretImgClassFunc={imgArray[1]}
          displayImgSrc={Villa}
          secretImgSrc={VillaImg}
          displayImgIconClass="icon-secret"
        />
      </div>

      <div className="trailer-container">
        <div className="icon-secret-div-2">
          <ImageEnlarge
            revealImg={() => revealImg(2)}
            closePopup={() => closePopup(2)}
            secretImgClassFunc={imgArray[2]}
            displayImgSrc={Cinema}
            secretImgSrc={CinemaImg}
            displayImgIconClass="icon-secret"
          />
        </div>
        <p>
          Trailer of Ritik's life! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Placeat incidunt culpa aperiam quas omnis mollitia?
          Voluptate, dolore recusandae ullam asperiores beatae, quam officia rem
          esse repellendus non dignissimos aut! Sit?
        </p>
        <div className="trailer-video">
          <video height="500" controls>
            <source src={TrailerOfLife} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="icon-secret-div-3">
        <ImageEnlarge
          revealImg={() => revealImg(3)}
          closePopup={() => closePopup(3)}
          secretImgClassFunc={imgArray[3]}
          displayImgSrc={Dog}
          secretImgSrc={DogImg}
          displayImgIconClass="icon-secret"
        />
      </div>

      <div className="photos-memories-container">
        <div className="photo-desc-memory">
          <ImageEnlarge
            revealImg={() => revealImg(6)}
            closePopup={() => closePopup(6)}
            secretImgClassFunc={imgArray[6]}
            displayImgSrc={GraduationCollage}
            secretImgSrc={GraduationCollage}
            displayImgIconClass="photo-memory"
          />
          <div className="desc-memory">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            officia possimus, incidunt quam eum vitae, sunt est exercitationem
            tempora provident debitis, enim a soluta qui accusamus deleniti?
            Rerum, modi quidem.
          </div>
        </div>
        <div className="icon-secret-div-4">
          <ImageEnlarge
            revealImg={() => revealImg(4)}
            closePopup={() => closePopup(4)}
            secretImgClassFunc={imgArray[4]}
            displayImgSrc={Snowy}
            secretImgSrc={SnowImg}
            displayImgIconClass="icon-secret"
          />
        </div>
        <div className="photo-desc-memory">
          <div className="desc-memory">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            officia possimus, incidunt quam eum vitae, sunt est exercitationem
            tempora provident debitis, enim a soluta qui accusamus deleniti?
            Rerum, modi quidem.
          </div>
          <ImageEnlarge
            revealImg={() => revealImg(7)}
            closePopup={() => closePopup(7)}
            secretImgClassFunc={imgArray[7]}
            displayImgSrc={FunThingsCollage}
            secretImgSrc={FunThingsCollage}
            displayImgIconClass="photo-memory"
          />
        </div>
      </div>

      <div className="icon-secret-div-5">
        <ImageEnlarge
          revealImg={() => revealImg(5)}
          closePopup={() => closePopup(5)}
          secretImgClassFunc={imgArray[5]}
          displayImgSrc={Star}
          secretImgSrc={NightImg}
          displayImgIconClass="icon-secret"
        />
      </div>
    </div>
  );
}
