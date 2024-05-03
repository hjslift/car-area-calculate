// index.js
const express = require('express');
var cors = require('cors');
const app = express();
const port = 2000;

const { calculateCarArea } = require('./carareaCal');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello This is Lisharp!');
});

// Change the endpoint to accept query parameters instead of using /:cardata
app.get('/carareacal/asdf', (req, res) => {
    const { CA, CB, JJ, DT, NOE, W } = req.query;

    // Check each parameter - ensuring numerical values are indeed numbers and DT is a string (not empty)
    if (isNaN(CA) || isNaN(CB) || isNaN(JJ) || isNaN(NOE) || isNaN(W) || typeof DT !== 'string' || DT.trim() === '') {
        res.status(400).json({ error: "입력 파라미터가 유효하지 않습니다." });
        return;
    }

    // Convert numerical string values to numbers to ensure proper type handling in further calculations
    const numericCA = parseFloat(CA);
    const numericCB = parseFloat(CB);
    const numericJJ = parseFloat(JJ);
    const numericNOE = parseFloat(NOE);
    const numericW = parseFloat(W);

    // Calculate results based on validated and correctly typed inputs
    const results = calculateCarArea(numericCA, numericCB, numericJJ, DT, numericNOE, numericW);
    res.json({ CarAreaCalculation: results });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
