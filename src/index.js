require('dotenv').config();

const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const prettify = require('html-prettify');
const dayjs = require("dayjs");

const data = require('./constants/data');
const getBackground = require("./apis/background");

const tplPath = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

const main = async () => {
  const updatedAt = dayjs().format('YYYY年MM月DD日 HH时mm分')

  const tplStr = fs.readFileSync(tplPath, 'utf8');

  const [background] = await Promise.all([
    getBackground(),
  ]);

  const html = ejs.render(tplStr, {
    ...data,
    background,
    updatedAt,
  });

  const prettyHtml = prettify(html);

  fs.writeFileSync(outputPath, prettyHtml);
}

main().then();
