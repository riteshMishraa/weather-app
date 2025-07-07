import toast from "react-hot-toast";
const apiKey = import.meta.env.VITE_API_KEY;

export const weatherApiWithLat = async (lat, long) => {
  const toastId = toast.loading("waiting for result");
  console.log("api key", apiKey);

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
    );
    const result = await res.json();
    console.log("result", result);
    toast.success("location got");
    return result;
  } catch (err) {
    console.log("error occure while fetching api", err);
    toast.error("Error while fetching");
    // toast.dismiss(toastId)
  } finally {
    toast.dismiss(toastId);
  }
};
