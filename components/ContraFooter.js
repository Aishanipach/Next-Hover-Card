"use client";

import Image from "next/image";
import inferno from "../public/thrower.webp";
import shadow from "../public/shadow.webp";
import starship from "../public/starship.webp";
import "../styles/global.css";
import ImageWithAudio from "./ui/ImageWithAudio";

function ContraFooter() {
  const CONTRA_FOOTER_ASSETS = [
    {
      imgName: inferno,
      imgAlt: "linkedin",
      caption:"Linkedin👀",
      onClickImg: () => {
        console.log("clicked on inferno");
      },
      audioSrc: "/audio/linkedin.mp3", // Use relative path
    },
    {
      imgName: shadow,
      imgAlt: "email",
      caption:"Email here📧",
      onClickImg: () => {
        console.log("clicked on shadow");
      },
      audioSrc: "/audio/gmail.mp3", // Use relative path
    },
    {
      imgName: starship,
      imgAlt: "resume",
      caption:"Resume🧻",
      onClickImg: () => {
        console.log("clicked on starship");
      },
      audioSrc: "/audio/resume.mp3", // Use relative path
    },
  ];

  return (
    <div className="flex flex-row justify-between w-full mx-10 my-10">
      {CONTRA_FOOTER_ASSETS.map(
        ({ imgName, imgAlt, onClickImg, audioSrc, caption }, index) => {
          return (
            <div  className="flex flex-col justify-between items-center" key={index}>
            <ImageWithAudio
              imgName={imgName}
              audioSrc={audioSrc}
              imgAlt={imgAlt}
              key={index}
              className="img"
              onClick={onClickImg}
            />
             <p className="description-bold uppercase text-white">{caption}</p>
            </div>
          );
        }
      )}
    </div>
  );
}

export default ContraFooter;
