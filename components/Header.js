/* eslint-disable @next/next/no-img-element */
import React from "react";
import LocationInfo from "./LocationInfo";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header className="relative h-60 w-full ">
      <img
        alt="header img"
        src="/pattern-bg.png"
        className="absolute z-[-1] h-full w-full bg-center  object-cover "
      />

      <div className="relative z-[999] flex flex-col items-center gap-8 px-8 pt-6">
        <div>
          <h1 className="text-xl font-medium text-white md:text-3xl">
            IP Address Tracker
          </h1>
        </div>
        <SearchBox />
        <LocationInfo />
      </div>
    </header>
  );
}

export default Header;
