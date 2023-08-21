// setTitle.js
const fs = require('fs');
var path = require('path');

const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const newTitle = process.argv[2] || 'Default Title';

const updatedHtml = indexHtml.replace('%%SITE_NAME%%', newTitle);

fs.writeFileSync(indexHtmlPath, updatedHtml);

console.log(`Set site title to: ${newTitle}`);
