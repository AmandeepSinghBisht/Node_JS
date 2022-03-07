const aman = require('fs');

//-> It is a package name
//This code is used import a library to our js file
aman.readFile('aman.txt', 'utf8', (err, file) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(file);
    }
})