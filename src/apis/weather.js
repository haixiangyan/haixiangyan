const axios = require("axios");
const baseURL = 'https://qqlykm.cn/api/api/tq.php';

// 获取当前天气
const getWeather = async (city) => {
  const res = await axios.request({
    method: 'GET',
    baseURL,
    params: { city }
  })

  const [todayInfo] = res.data.data.forecast;

  // {
  //   "date": "18日星期一",
  //   "high": "高温 18℃",
  //   "fengli": "",
  //   "low": "低温 16℃",
  //   "fengxiang": "北风",
  //   "type": "小雨"
  // },

  console.log('weather', todayInfo);

  const month = (new Date()).getMonth() + 1;

  return `目前坐标在${city}。今天${month}月${todayInfo.date}，温度：${todayInfo.high} - ${todayInfo.low}，${todayInfo.type}。希望你有一天好心情 ❤️`;
}

module.exports = getWeather;
