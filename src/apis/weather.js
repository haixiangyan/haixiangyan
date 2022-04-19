const axios = require("axios");

const base = 'https://www.metaweather.com';
const baseURL = `${base}/api/location/2161853/`; // 深圳

const getIconUrl = (state) => `${base}/static/img/weather/${state}.svg`;

const getStateCNName = (state) => {
  const map = {
    sn: '有雪',
    sl: '雨雪天气',
    h: '冰雹天气',
    t: '雷雨',
    hr: '暴雨',
    lr: '小雨',
    s: '阵雨',
    hc: '多云',
    lc: '少云',
    c: '晴',
  }

  return map[state];
}

// 获取当前天气
const getWeather = async (location) => {
  const res = await axios.request({
    method: 'GET',
    baseURL,
  })

  console.log('weather res', res.data);

  return res.data;
}

module.exports = {
  getWeather,
  getIconUrl,
  getStateCNName,
};

// const mock = {
//   "consolidated_weather": [{
//     "id": 6094559978192896,
//     "weather_state_name": "Showers",
//     "weather_state_abbr": "s",
//     "wind_direction_compass": "NNE",
//     "created": "2022-04-19T01:43:48.876371Z",
//     "applicable_date": "2022-04-19",
//     "min_temp": 18.725,
//     "max_temp": 22.09,
//     "the_temp": 22.665,
//     "wind_speed": 4.120818173167369,
//     "wind_direction": 12.34529997376113,
//     "air_pressure": 1017.0,
//     "humidity": 72,
//     "visibility": 10.29208174262308,
//     "predictability": 73
//   }, {
//     "id": 5895326511661056,
//     "weather_state_name": "Showers",
//     "weather_state_abbr": "s",
//     "wind_direction_compass": "NE",
//     "created": "2022-04-19T01:43:51.992738Z",
//     "applicable_date": "2022-04-20",
//     "min_temp": 19.560000000000002,
//     "max_temp": 25.975,
//     "the_temp": 24.445,
//     "wind_speed": 3.369130884289085,
//     "wind_direction": 49.86704841550847,
//     "air_pressure": 1017.0,
//     "humidity": 74,
//     "visibility": 9.009571601845224,
//     "predictability": 73
//   }, {
//     "id": 5186702776729600,
//     "weather_state_name": "Heavy Cloud",
//     "weather_state_abbr": "hc",
//     "wind_direction_compass": "SSE",
//     "created": "2022-04-19T01:43:54.856796Z",
//     "applicable_date": "2022-04-21",
//     "min_temp": 21.479999999999997,
//     "max_temp": 28.325,
//     "the_temp": 26.87,
//     "wind_speed": 3.529959714788303,
//     "wind_direction": 147.65806203225577,
//     "air_pressure": 1015.0,
//     "humidity": 70,
//     "visibility": 11.267634514435695,
//     "predictability": 71
//   }, {
//     "id": 6621878882926592,
//     "weather_state_name": "Heavy Cloud",
//     "weather_state_abbr": "hc",
//     "wind_direction_compass": "SE",
//     "created": "2022-04-19T01:43:58.272298Z",
//     "applicable_date": "2022-04-22",
//     "min_temp": 23.59,
//     "max_temp": 29.13,
//     "the_temp": 27.67,
//     "wind_speed": 3.909805242206845,
//     "wind_direction": 145.44550775547253,
//     "air_pressure": 1013.5,
//     "humidity": 73,
//     "visibility": 10.153826652350276,
//     "predictability": 71
//   }, {
//     "id": 6432369222352896,
//     "weather_state_name": "Light Cloud",
//     "weather_state_abbr": "lc",
//     "wind_direction_compass": "SSE",
//     "created": "2022-04-19T01:44:00.879515Z",
//     "applicable_date": "2022-04-23",
//     "min_temp": 24.03,
//     "max_temp": 29.235,
//     "the_temp": 28.810000000000002,
//     "wind_speed": 4.417226616174872,
//     "wind_direction": 164.16627985153858,
//     "air_pressure": 1011.5,
//     "humidity": 73,
//     "visibility": 9.76298417243299,
//     "predictability": 70
//   }, {
//     "id": 6312602683572224,
//     "weather_state_name": "Showers",
//     "weather_state_abbr": "s",
//     "wind_direction_compass": "S",
//     "created": "2022-04-19T01:44:04.040917Z",
//     "applicable_date": "2022-04-24",
//     "min_temp": 24.725,
//     "max_temp": 30.14,
//     "the_temp": 28.43,
//     "wind_speed": 5.469450210769108,
//     "wind_direction": 178.0,
//     "air_pressure": 1010.0,
//     "humidity": 74,
//     "visibility": 9.999726596675416,
//     "predictability": 73
//   }],
//   "time": "2022-04-19T12:31:50.155908+08:00",
//   "sun_rise": "2022-04-19T05:59:40.410196+08:00",
//   "sun_set": "2022-04-19T18:45:19.910567+08:00",
//   "timezone_name": "LMT",
//   "parent": {"title": "China", "location_type": "Country", "woeid": 23424781, "latt_long": "36.894451,104.165649"},
//   "sources": [{
//     "title": "BBC",
//     "slug": "bbc",
//     "url": "http://www.bbc.co.uk/weather/",
//     "crawl_rate": 360
//   }, {
//     "title": "Forecast.io",
//     "slug": "forecast-io",
//     "url": "http://forecast.io/",
//     "crawl_rate": 480
//   }, {
//     "title": "HAMweather",
//     "slug": "hamweather",
//     "url": "http://www.hamweather.com/",
//     "crawl_rate": 360
//   }, {
//     "title": "Met Office",
//     "slug": "met-office",
//     "url": "http://www.metoffice.gov.uk/",
//     "crawl_rate": 180
//   }, {
//     "title": "OpenWeatherMap",
//     "slug": "openweathermap",
//     "url": "http://openweathermap.org/",
//     "crawl_rate": 360
//   }, {
//     "title": "Weather Underground",
//     "slug": "wunderground",
//     "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
//     "crawl_rate": 720
//   }, {
//     "title": "World Weather Online",
//     "slug": "world-weather-online",
//     "url": "http://www.worldweatheronline.com/",
//     "crawl_rate": 360
//   }],
//   "title": "Shenzhen",
//   "location_type": "City",
//   "woeid": 2161853,
//   "latt_long": "22.546789,114.112556",
//   "timezone": "Asia/Shanghai"
// }
