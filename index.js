const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors');
const app = express();
const port = 5000;

// Define initial status of all devices
let device1 = false;
let device2 = false;
let device3 = false;
let device4 = false;

app.use(bodyparser.urlencoded({ extended: false }), cors());
app.use(bodyparser.json());

app.post('/', (req, res)=> {
   device1 = req.body.device1;
   device2 = req.body.device2;
   device3 = req.body.device3;
   device4 = req.body.device4;
});

app.get('/api', (req, res)=> {
    res.send({
        D1: device1,
        D2: device2,
        D3: device3,
        D4: device4
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
