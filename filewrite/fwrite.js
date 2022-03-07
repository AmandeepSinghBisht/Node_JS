const fwri = require('fs');
const str = "maka yaha kuchh smjh ni aa rha bc";
fwri.writeFile('car.txt', str, (err, fl) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fl);
    }
})