const naam = require('fs');
naam.rmdir('chopatlal', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("directory successfully removed....!");
    }
})