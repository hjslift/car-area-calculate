// index.js
const express = require('express');
var cors = require('cors');
const app = express();
const port = 2000;

// Ensure that the data arrays and functions are only imported once and used correctly
const {
    caPairs, cbPairs, jjPairs, noePairs, wPairs,
    findCA, findCB, findJJ, findNOE, findW, runCalculations
} = require('./aaCal');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, this is Lisharp!');
});

app.get('/calculateArea/asdf', (req, res) => {
    const { CA, CB, JJ, DT, NOE, W } = req.query;

    if (!CA || !CB || !JJ || !DT || !NOE || !W) {
        res.status(400).json({ error: "All parameters must be provided." });
        return;
    }

    const resultCA = findCA(caPairs, CA);
    const resultCB = findCB(cbPairs, CB);
    const resultJJ = findJJ(jjPairs, JJ);
    const resultNOE = findNOE(noePairs, NOE);
    const resultW = findW(wPairs, W);

    if (!resultCA || !resultCB || !resultJJ || !resultNOE || !resultW) {
        res.status(404).json({ error: "One or more invalid parameters." });
        return;
    }

    const results = runCalculations(resultCA, resultCB, DT, resultJJ, resultNOE, resultW);

    console.log(`CA = ${results.CA}`);
    console.log(`CB = ${results.CB}`);
    console.log(`JJ = ${results.JJ}`);
    console.log(`Door Type="${results.DT}"`);
    console.log(`NOE = ${results.NOE}`);
    console.log(`W = ${results.W}`);
    console.log(`persons = ${results.persons}`);
    console.log(`AA = ${results.AA}`);
    console.log(`areaData of table5 = ${results.areaData}`);
    console.log(`area of table7 = ${results.areaOfTable7}`);
    console.log(`검토결과 : ${results.result}`);

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
