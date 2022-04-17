const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const prettify = require('html-prettify');

const data = require('./constants/data');

const tplPath = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, '../README.md');

const main = () => {
  const tplStr = fs.readFileSync(tplPath, 'utf8');

  const html = ejs.render(tplStr, data);

  const prettyHtml = prettify(html);

  fs.writeFileSync(outputPath, prettyHtml);
}

main();
