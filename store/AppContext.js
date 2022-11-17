import { createContext, useState } from "react";

export const AppContext = createContext({
  ipAddress: "",
  location: [],
  city: "",
  timeZone: "",
  isp: "",
  isLoading: false,
  searchIp: (ip) => {},
});

export const AppContextProvider = (props) => {
  const [trackData, setTrackData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchIp = (ip) => {
    let url;
    const fetchData = async () => {
      setIsLoading(true);
      if (ip) {
        url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&ipAddress=${ip}&domain=${ip}`;
      } else {
        url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
      }

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();

        setTrackData({
          ipAddress: data.ip,
          location: [data.location.lat, data.location.lng],
          city: `${data.location.city}, ${data.location.region}`,
          timeZone: `UTC ${data.location.timezone}`,
          isp: data.isp,
        });
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
    setError(false);
  };

  return (
    <AppContext.Provider
      value={{
        ipAddress: trackData?.ipAddress,
        location: trackData?.location,
        city: trackData?.city,
        timeZone: trackData?.timeZone,
        isp: trackData?.isp,
        isLoading: isLoading,
        error: error,
        searchIp: searchIp,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
