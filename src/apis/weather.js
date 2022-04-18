const axios = require("axios");
const baseURL = 'https://qqlykm.cn/api/api/tq.php';

const getWeather = async (city) => {
  const res = await axios.request({
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

  return `今天是${month}月${todayInfo.date}，温度：${todayInfo.high} - ${todayInfo.low}，${todayInfo.type}`;
}

module.exports = getWeather;
