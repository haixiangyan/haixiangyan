const axios = require("axios");
const baseURL = 'https://api.m3o.com/v1/weather/Now';

// 获取当前天气
const getWeather = async (location) => {
  console.log('token', process.env.M3O_TOKEN.slice(1, 3));

  const res = await axios.request({
    method: 'GET',
    baseURL,
    params: { location },
    headers: {
      Authorization: `Bearer ${process.env.M3O_TOKEN}`
    }
  })

  // {
  //   "location": "Shenzhen",
  //   "region": "Guangdong",
  //   "country": "China",
  //   "latitude": 22.53,
  //   "longitude": 114.13,
  //   "timezone": "Asia/Hong_Kong",
  //   "local_time": "2022-04-19 10:46",
  //   "temp_c": 17,
  //   "temp_f": 62.6,
  //   "feels_like_c": 17,
  //   "feels_like_f": 62.6,
  //   "humidity": 88,
  //   "cloud": 100,
  //   "daytime": true,
  //   "condition": "Overcast",
  //   "icon_url": "//cdn.weatherapi.com/weather/64x64/day/122.png",
  //   "wind_mph": 11.9,
  //   "wind_kph": 19.1,
  //   "wind_direction": "N",
  //   "wind_degree": 10
  // }

  console.log('weather res', res.data);

  return res.data;
}

module.exports = getWeather;
