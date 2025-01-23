"use client";

import Image from "next/image";
import React from "react";
import asterisk from "../public/asterisk.png";
import "../styles/global.css";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="home-master-card">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto  h-auto rounded-xl p-2  ">
        <CardItem translateZ="50">
          <h1 className="title-case" style={{ lineHeight: "2rem" }}>
            An avid contra fan &
          </h1>
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row my-1 justify-between align-bottom ">
                <button className="border-2 rounded-full py-1 px-1.5 border-lime-500 mr-3">
                  <p className="description-bold uppercase text-lime-500">
                    Github here
                  </p>
                </button>
                <Image
                  className="mx-1"
                  src={asterisk}
                  width={30}
                  height={30}
                  alt="asterisk"
                />
              </div>
              <div className="flex flex-row my-1 justify-around align-center">
                <div className="idle m-1"></div>
                <button className="border-2 rounded-full py-1 px-1.5 border-black">
                  <p className="description-bold uppercase text-black">
                    Play something for me
                  </p>
                </button>
              </div>
            </div>
            <div className="flex align-top">
              <h1 className="title-case">code sometimes</h1>
            </div>
          </div>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover for CSS perspective and watch it go!
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
