const fs = require('fs');

const content = 'Foo';

const callback = (err) => {
    if (err) console.log('err', err);
    else console.log('created');
};

fs.writeFile('foo-async.txt', content, callback);
