"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ZoomParallax from "../components/ZoomParallax";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {/* Hero section */}
      <div className=" bg-[url('/monster.jpg.jpg')] h-lvh">
        <div className="text-white h-lvh w-[80%] m-auto">
          {/* first div */}
          <div className=" w-[80%] m-auto flex justify-between items-center py-3">
            <div className="w-24 h-24 bg-[#7D1C16] flex flex-col justify-center items-center  ">
              <h1 className="font-bold text-5xl  ">VP</h1>
              <h3 className="font-normal leading-3">웨리드</h3>
            </div>
          </div>

          {/* second div */}
          <div className="w-[80%] m-auto flex pt-[75px] justify-between ">
            <div>
              <div className="font-bold gap-5 flex ">
                <h1 className="text-8xl font-medium">01</h1>
                <span className="text-6xl">+</span>
              </div>
              <div data-aos="fade-up">
                <h1 className="text-4xl font-semibold mt-2">MOGAL KHAN</h1>
                <h1 className="text-3xl font-semibold">모굴 칸 : 사하브</h1>
                <h2 className="mt-10 w-96 font-medium ">
                  세상에는 많은 사람들이 있습니다. 하지만 난 아직
                  싱글이에요싱글이에요.
                </h2>
              </div>
            </div>

            <div className="text-end flex flex-col justify-between">
              <div>
                <div className="flex justify-end pb-3">
                  <div className="h-1.5 w-11 bg-white text-end"></div>
                </div>
                <h2 className="font-medium leading-3">Dumm</h2>
                <h2 className="font-medium leading-5">Monster</h2>
              </div>
              <div>
                <div className="flex justify-end pb-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-white text-end"></div>
                </div>
                <h2 className="font-medium leading-3">Dumm</h2>
                <h2 className="font-medium leading-5">goemul eomma</h2>
              </div>
            </div>
          </div>
          {/* 3rd div */}
          <div className="w-[80%] h-16 m-auto pt-16">
            <div className="h-1.5 w-14 bg-white text-end"></div>
          </div>
        </div>
      </div>
      <div className="relative -z-10 bg-no-repeat bg-[url('/shading.jpg')] bg-cover bg-right">
        <ZoomParallax />
      </div>
    </>
  );
}
