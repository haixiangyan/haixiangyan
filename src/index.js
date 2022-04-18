const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const prettify = require('html-prettify');

const getWeather = require('./apis/weather')
const data = require('./constants/data');

const tplPath = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

const main = async () => {
  const tplStr = fs.readFileSync(tplPath, 'utf8');

  const weatherStr = await getWeather('深圳');

  const html = ejs.render(tplStr, {
    ...data,
    weatherStr,
  });

  const prettyHtml = prettify(html);

  fs.writeFileSync(outputPath, prettyHtml);
}

main().then();
