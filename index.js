const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const data = require('./data');

const tplPath = path.join(__dirname, './template.ejs');
const outputPath = path.join(__dirname, './output.html');

const main = () => {
  const tplStr = fs.readFileSync(tplPath, 'utf8');

  const html = ejs.render(tplStr, data);

  fs.writeFileSync(outputPath, html);
}

main();
