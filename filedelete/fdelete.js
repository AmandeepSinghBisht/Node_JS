const boom = require('fs');
boom.unlink('noob.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("sucessfully deleted..!");
    }
})