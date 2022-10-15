const fs = require('fs');

const content = fs.readFileSync('foo.txt', 'utf-8');

console.log(content);
