const dhoom = require('fs');
dhoom.mkdir('praduman', (err) => {//'chopatlal'
    if (err) {
        console.log(err);
    }
    else {
        console.log("Folder successfully created....!");
    }
})