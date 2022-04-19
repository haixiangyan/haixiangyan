require('dotenv').config();

const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const prettify = require('html-prettify');

const { getWeather, getIconUrl, getStateCNName } = require('./apis/weather')
const data = require('./constants/data');
const getBackground = require("./apis/background");

const tplPath = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

const main = async () => {
  const tplStr = fs.readFileSync(tplPath, 'utf8');

  const [weather, background] = await Promise.all([
    getWeather('ShenZhen'),
    getBackground(),
  ]);

  const html = ejs.render(tplStr, {
    ...data,
    weather,
    getIconUrl,
    getStateCNName,
    background
  });

  const prettyHtml = prettify(html);

  fs.writeFileSync(outputPath, prettyHtml);
}

main().then();
