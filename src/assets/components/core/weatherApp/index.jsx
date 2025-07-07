import React, { useEffect, useState } from "react";
import { weatherApiWithLat } from "../../../../services/api";
import WeatherInfo from "./WeatherInfo";
import Loader from "../../common/Loader";
import { FaLocationDot } from "react-icons/fa6";

const WeatherApp = () => {
  const [uiData, setUiData] = useState(null);
  const [loading, setLoading] = useState(false);

  // get current location
  const locationGet = () => {
    setLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const data = await weatherApiWithLat(latitude, longitude);
            setUiData(data);
          } catch (error) {
            console.error("Error fetching weather data:", error);
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation not supported or access denied");
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(uiData);
  }, [uiData]);

  return (
    <div
      className="max-w-[1200px] mx-auto w-11/12 cursor-pointer"
      // onClick={locationGet}
    >
      <div className=" flex justify-center py-10 items-center gap-10">
        <input
          type="text"
          className="bg-[#e4ebad] rounded-full outline-0 h-10 px-6"
          placeholder="Enter City Name"
        />
        <div className="p-3 bg-white rounded-full " onClick={locationGet}>
          <FaLocationDot fontSize={17} />{" "}
        </div>
      </div>

      {loading ? <Loader /> : <WeatherInfo />}
    </div>
  );
};

export default WeatherApp;
