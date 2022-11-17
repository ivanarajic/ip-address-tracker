import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "../store/AppContext";

import Spinner from "./Spinner";

function LocationInfo() {
  const trackCtx = useContext(AppContext);

  const { searchIp, isLoading, error } = trackCtx;

  const infoData = [
    {
      label: "Ip address",
      info: trackCtx.ipAddress,
    },
    {
      label: "Location",
      info: trackCtx.city,
    },
    {
      label: "timezone",
      info: trackCtx.timeZone,
    },
    {
      label: "Isp",
      info: trackCtx.isp,
    },
  ];

  useEffect(() => {
    searchIp();
  }, []);

  return (
    <ul className="grid w-full grid-cols-1 justify-items-center gap-4 rounded-xl bg-white p-7 md:w-4/5 lg:grid-cols-4 lg:justify-items-start">
      {infoData.map((data, index) => (
        <li
          key={index}
          className="w-full lg:border-r-2 lg:border-slate-200 lg:px-6 lg:last:border-none "
        >
          <div className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-[#969696] lg:text-left">
            {data.label}
          </div>
          <div className="text-center text-lg font-bold text-[#2b2b2b] md:text-2xl lg:text-left">
            {error ? (
              <p className="text-sm font-normal text-red-400">
                Could not get data
              </p>
            ) : (
              <>{isLoading ? <Spinner /> : data.info}</>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default LocationInfo;
