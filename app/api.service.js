import got from "got";

const BASE_URL = "http://localhost:3000/weather";

export default {
  getWeather() {
    return got(BASE_URL).json();
  },
};
