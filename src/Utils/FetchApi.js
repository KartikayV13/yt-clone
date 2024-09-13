import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyDP943mhV_a95UvNWu9O-RHkX5gpi9Z_Yg";

export const fetchApiForYoutubeData = async (enpoints, params = {}) => {
  //endpoint means what we have to find like video,song,movie etc
  try {
    const response = await axios.get(`${BASE_URL}/${enpoints}`, {
      params: {
        ...params,
        key: API_KEY,
      },
    });
    console.log("this is my response ", response.data);

    return response.data;
  } catch (error) {
    console.error(error, "error fetching youtube data");
  }
};
