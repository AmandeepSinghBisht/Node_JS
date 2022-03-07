const aman = require('fs');
aman.rename('file.txt', 'book.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("sucessfully renamed");
    }
})