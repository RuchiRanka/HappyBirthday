import React from "react";

export default function GiftBox() {
  return (
    <div>
      <div className="gift-box">
        <div className="box-wrap-top">
          <div className="box-wrap-left"></div>
          <div className="box-wrap-right"></div>
        </div>
        <div className="box-lid">
          <div className="box-lid-left"></div>
          <div className="box-lid-wrap"></div>
          <div className="box-lid-right"></div>
        </div>
        <div className="box-lid-shadow">
          <div className="box-lid-shadow-left"></div>
          <div className="box-lid-shadow-wrap"></div>
          <div className="box-lid-shadow-right"></div>
        </div>
        <div className="box">
          <div className="box-left"></div>
          <div className="box-wrap"></div>
          <div className="box-right"></div>
        </div>
      </div>
    </div>
  );
}
