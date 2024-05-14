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

    // Constructing Markdown response
    const responseMarkdown = `
# 카면적 계산검토서

- CA = ${results.CA}
- CB = ${results.CB}
- JJ = ${results.JJ}
- Door Type = "${results.DT}"
- NOE = ${results.NOE}
- W = ${results.W}
- persons = ${results.persons}
- AA = ${results.AA}
- areaData of table5 = ${results.areaData}
- area of table7 = ${results.areaOfTable7}
# ${results.result}
    `;

    // Sending the Markdown response
    res.send(responseMarkdown);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
