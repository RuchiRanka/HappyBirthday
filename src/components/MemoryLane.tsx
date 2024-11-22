import React, { useEffect, useState } from "react";
import Cinema from "../images/cinema.png";
import Dog from "../images/dog.png";
import Snowy from "../images/snowy.png";
import Star from "../images/star.png";
import Surprise from "../images/surprise.png";
import Villa from "../images/villa.png";
import ImageEnlarge from "./ImageEnlarge";
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
      <div className="tab-page-desc">
        Welcome to Memory Lane Island! 🌴✨ Here, amidst memories galore, you’ll
        find exciting surprises. 🎉 Watch out for surprise pop-ups, and keep
        your wits in place. Ready to go down Memory Lane and take on this
        rollercoaster full of memories? Let the adventure begin! 🎢
        <br />
        Click on wiggly items to get a trip down memory lane & don't forget to
        enjoy the ride, you'll love it here!
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
          Here's a trailer of your life! Your awesome personality & your unique
          friends have contributed here to take you to this mystical land &
          power your soul with energy. Go ahead, power up by watching this & run
          headfast through these doors!
        </p>
        <div className="trailer-video">
          <video controls>
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
            Remember 'Graduation Day', we had so much fun, didn't we? We were so
            thrilled that we navigated our way through every obstacle, every
            hurdle, and finally, became graduates. "WE'RE ENGINEERS!!", these
            words were echoing so much that day! Can you even believe it?
            Seriously, this has been such a thrill!
            <br />I am so glad I found you, you were the most important, the
            most pivotal part of this journey. Thank you, thank you so much,
            truly, for being there!
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
            As I remember it, the 'Trampoline Park' was one of the first
            impulsive & spontaneous "fun decision" that we ever took! It was so
            fun and I honestly have it engraved on my brain permanently. Let's
            never stop having fun like this, let's live the most enthusiastic, a
            little spontaneous & impulsive life, with every possible good risk!
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
