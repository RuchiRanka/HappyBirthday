import React from "react";

interface ImageEnlargeProps {
  closePopup(): void;
  revealImg(): void;
  displayImgSrc: string;
  secretImgClassFunc: boolean;
  secretImgSrc: string;
  displayImgIconClass: string;
}

export default function ImageEnlarge(props: ImageEnlargeProps) {
  return (
    <div>
      <div className="icon-secret-img">
        <div onClick={props.revealImg}>
          <img
            className={props.displayImgIconClass}
            src={props.displayImgSrc}
            alt="displayImgSrc"
          />
        </div>
        <div className={props.secretImgClassFunc ? "secret-img" : "no-img"}>
          <div className="secret-img-inner">
            <button onClick={props.closePopup}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={props.secretImgSrc}
              alt="secretImgSrc"
              className="secret-img-class"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
