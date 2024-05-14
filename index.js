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

    // Constructing HTML response with basic formatting
    const responseHTML = `
        <html>
        <head>
            <title>Calculation Results</title>
            <style>
                body { font-family: Arial, sans-serif; }
                h4 { color: navy; }
                p { color: black; }
                h3 { color: red; }
            </style>
        </head>
        <body>
            <h4>카면적 계산검토서</h4>
            <p>CA = ${results.CA}</p>
            <p>CB = ${results.CB}</p>
            <p>JJ = ${results.JJ}</p>
            <p>Door Type = "${results.DT}"</p>
            <p>NOE = ${results.NOE}</p>
            <p>W = ${results.W}</p>
            <p>persons = ${results.persons}</p>
            <p>AA = ${results.AA}</p>
            <p>areaData of table5 = ${results.areaData}</p>
            <p>area of table7 = ${results.areaOfTable7}</p>
            <h3>${results.result}</h3>
        </body>
        </html>
    `;

    // Sending the HTML response
    res.send(responseHTML);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
