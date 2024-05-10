// CA, CB, JJ, NOE, W 카테고리 별 table 

//  CA table
const caPairs = [
    { abbreviationCA: "CA1000", dataCA: 1000 },
    { abbreviationCA: "CA1050", dataCA: 1050 },
    { abbreviationCA: "CA1100", dataCA: 1100 },
    { abbreviationCA: "CA1150", dataCA: 1150 },
    { abbreviationCA: "CA1200", dataCA: 1200 },
    { abbreviationCA: "CA1250", dataCA: 1250 },
    { abbreviationCA: "CA1300", dataCA: 1300 },
    { abbreviationCA: "CA1350", dataCA: 1350 },
    { abbreviationCA: "CA1400", dataCA: 1400 },
    { abbreviationCA: "CA1450", dataCA: 1450 },
    { abbreviationCA: "CA1500", dataCA: 1500 },
    { abbreviationCA: "CA1550", dataCA: 1550 },
    { abbreviationCA: "CA1600", dataCA: 1600 },
    { abbreviationCA: "CA1650", dataCA: 1650 },
    { abbreviationCA: "CA1700", dataCA: 1700 },
    { abbreviationCA: "CA1750", dataCA: 1750 },
    { abbreviationCA: "CA1800", dataCA: 1800 },
    { abbreviationCA: "CA1850", dataCA: 1850 },
    { abbreviationCA: "CA1900", dataCA: 1900 },
    { abbreviationCA: "CA1950", dataCA: 1950 },
    { abbreviationCA: "CA2000", dataCA: 2000 },
    { abbreviationCA: "CA2050", dataCA: 2050 },
    { abbreviationCA: "CA2100", dataCA: 2100 },
    { abbreviationCA: "CA2150", dataCA: 2150 },
    { abbreviationCA: "CA2200", dataCA: 2200 },
    { abbreviationCA: "CA2250", dataCA: 2250 },
    { abbreviationCA: "CA2300", dataCA: 2300 },
    { abbreviationCA: "CA2350", dataCA: 2350 },
    { abbreviationCA: "CA2400", dataCA: 2400 },
    { abbreviationCA: "CA2450", dataCA: 2450 },
    { abbreviationCA: "CA2500", dataCA: 2500 },
    { abbreviationCA: "CA2550", dataCA: 2550 },
    { abbreviationCA: "CA2600", dataCA: 2600 },
    { abbreviationCA: "CA2650", dataCA: 2650 },
    { abbreviationCA: "CA2700", dataCA: 2700 },
    { abbreviationCA: "CA2750", dataCA: 2750 },
    { abbreviationCA: "CA2800", dataCA: 2800 },
    { abbreviationCA: "CA2850", dataCA: 2850 },
    { abbreviationCA: "CA2900", dataCA: 2900 },
    { abbreviationCA: "CA2950", dataCA: 2950 },
    { abbreviationCA: "CA3000", dataCA: 3000 }
];


//  CB table
const cbPairs = [
    { abbreviationCB: "CB850", dataCB: 850 },
    { abbreviationCB: "CB900", dataCB: 900 },
    { abbreviationCB: "CB950", dataCB: 950 },
    { abbreviationCB: "CB1000", dataCB: 1000 },
    { abbreviationCB: "CB1050", dataCB: 1050 },
    { abbreviationCB: "CB1100", dataCB: 1100 },
    { abbreviationCB: "CB1150", dataCB: 1150 },
    { abbreviationCB: "CB1200", dataCB: 1200 },
    { abbreviationCB: "CB1250", dataCB: 1250 },
    { abbreviationCB: "CB1300", dataCB: 1300 },
    { abbreviationCB: "CB1350", dataCB: 1350 },
    { abbreviationCB: "CB1400", dataCB: 1400 },
    { abbreviationCB: "CB1450", dataCB: 1450 },
    { abbreviationCB: "CB1500", dataCB: 1500 },
    { abbreviationCB: "CB1550", dataCB: 1550 },
    { abbreviationCB: "CB1600", dataCB: 1600 },
    { abbreviationCB: "CB1650", dataCB: 1650 },
    { abbreviationCB: "CB1700", dataCB: 1700 },
    { abbreviationCB: "CB1750", dataCB: 1750 },
    { abbreviationCB: "CB1800", dataCB: 1800 },
    { abbreviationCB: "CB1850", dataCB: 1850 },
    { abbreviationCB: "CB1900", dataCB: 1900 },
    { abbreviationCB: "CB1950", dataCB: 1950 },
    { abbreviationCB: "CB2000", dataCB: 2000 },
    { abbreviationCB: "CB2050", dataCB: 2050 },
    { abbreviationCB: "CB2100", dataCB: 2100 },
    { abbreviationCB: "CB2150", dataCB: 2150 },
    { abbreviationCB: "CB2200", dataCB: 2200 },
    { abbreviationCB: "CB2250", dataCB: 2250 },
    { abbreviationCB: "CB2300", dataCB: 2300 },
    { abbreviationCB: "CB2350", dataCB: 2350 },
    { abbreviationCB: "CB2400", dataCB: 2400 },
    { abbreviationCB: "CB2450", dataCB: 2450 },
    { abbreviationCB: "CB2500", dataCB: 2500 },
    { abbreviationCB: "CB2550", dataCB: 2550 },
    { abbreviationCB: "CB2600", dataCB: 2600 },
    { abbreviationCB: "CB2650", dataCB: 2650 },
    { abbreviationCB: "CB2700", dataCB: 2700 },
    { abbreviationCB: "CB2750", dataCB: 2750 },
    { abbreviationCB: "CB2800", dataCB: 2800 },
    { abbreviationCB: "CB2850", dataCB: 2850 },
    { abbreviationCB: "CB2900", dataCB: 2900 },
    { abbreviationCB: "CB2950", dataCB: 2950 },
    { abbreviationCB: "CB3000", dataCB: 3000 }
];


//  JJ table
const jjPairs = [
    { abbreviationJJ: "JJ800", dataJJ: 800 },
    { abbreviationJJ: "JJ900", dataJJ: 900 },
    { abbreviationJJ: "JJ1000", dataJJ: 1000 },
    { abbreviationJJ: "JJ1100", dataJJ: 1100 },
    { abbreviationJJ: "JJ1200", dataJJ: 1200 },
    { abbreviationJJ: "JJ1300", dataJJ: 1300 },
    { abbreviationJJ: "JJ1400", dataJJ: 1400 },
    { abbreviationJJ: "JJ1500", dataJJ: 1500 },
    { abbreviationJJ: "JJ1600", dataJJ: 1600 },
    { abbreviationJJ: "JJ1700", dataJJ: 1700 },
    { abbreviationJJ: "JJ1800", dataJJ: 1800 },
    { abbreviationJJ: "JJ1900", dataJJ: 1900 },
    { abbreviationJJ: "JJ2000", dataJJ: 2000 },
    { abbreviationJJ: "JJ2100", dataJJ: 2100 },
    { abbreviationJJ: "JJ2200", dataJJ: 2200 },
    { abbreviationJJ: "JJ2300", dataJJ: 2300 },
    { abbreviationJJ: "JJ2400", dataJJ: 2400 }
];


//  NOE table
const noePairs = [
    { abbreviationNOE: "NOE1", dataNOE: 1 },
    { abbreviationNOE: "NOE2", dataNOE: 2 }
];


//  W table
const wPairs = [
    { abbreviationW: "W550", dataW: 550 },
    { abbreviationW: "W600", dataW: 600 },
    { abbreviationW: "W700", dataW: 700 },
    { abbreviationW: "W750", dataW: 750 },
    { abbreviationW: "W900", dataW: 900 },
    { abbreviationW: "W1000", dataW: 1000 },
    { abbreviationW: "W1150", dataW: 1150 },
    { abbreviationW: "W1200", dataW: 1200 },
    { abbreviationW: "W1350", dataW: 1350 },
    { abbreviationW: "W1600", dataW: 1600 },
    { abbreviationW: "W1800", dataW: 1800 },
    { abbreviationW: "W2000", dataW: 2000 },
    { abbreviationW: "W2500", dataW: 2500 }
];




//  CA 값을 찾기 위한 함수
function findCA(caArray, targetCA) {
    const match = caArray.find(pair => pair.abbreviationCA === targetCA);
    if (match) {
        return match.dataCA;
    } else {
        console.log(`CA not found: ${targetCA}`);
        return null;
    }
}




//  CB 값을 찾기 위한 함수
function findCB(cbArray, targetCB) {
    const match = cbArray.find(pair => pair.abbreviationCB === targetCB);
    if (match) {
        return match.dataCB;
    } else {
        console.log(`CB not found: ${targetCB}`);
        return null;
    }
}




//  JJ 값을 찾기 위한 함수
function findJJ(jjArray, targetJJ) {
    const match = jjArray.find(pair => pair.abbreviationJJ === targetJJ);
    if (match) {
        return match.dataJJ;
    } else {
        console.log(`JJ not found: ${targetJJ}`);
        return null;
    }
}




//  NOE 값을 찾기 위한 함수
function findNOE(noeArray, targetNOE) {
    const match = noeArray.find(pair => pair.abbreviationNOE === targetNOE);
    if (match) {
        return match.dataNOE;
    } else {
        console.log(`NOE not found: ${targetNOE}`);
        return null;
    }
}




//  W 값을 찾기 위한 함수
function findW(wArray, targetW) {
    const match = wArray.find(pair => pair.abbreviationW === targetW);
    if (match) {
        return match.dataW;
    } else {
        console.log(`W not found: ${targetW}`);
        return null;
    }
}




//  AA값 구하기 위한 함수

//  도어 타입에 따른 계수값 확인
function checkDoorType(DT) {
    if (DT === "1SCO") {
        return 0;
    } else if (DT === "2SCO" || DT === "2SSO") {
        return 1;
    } else {
        return null;
    }
}

//  FA(전면 면적) 계산
function calculateProduct(DT, JJ, NOE) {
    let coefficient = checkDoorType(DT);
    if (coefficient === null) {
        console.log("Invalid Door Type");
        return null;
    }
    let FA = ((JJ / 2) * 0.001) * 0.11 * NOE * coefficient;
    return Number(FA.toFixed(4));
}

//  AA(유효면적) 계산
function calculateProductIndex(CA, CB, DT, JJ, NOE) {
    let FA = calculateProduct(DT, JJ, NOE);
    if (FA === null) {
        console.log("Error in calculating FA");
        return;
    }
    let AA = (CA * 0.001) * (CB * 0.001) + FA;
    return parseFloat(AA.toFixed(4));
}




//  Table5에서 areaData 찾기
const capacityAreaPairs = [
    { capacityData: 100, areaData: 0.37 },
    { capacityData: 180, areaData: 0.58 },
    { capacityData: 225, areaData: 0.7 },
    { capacityData: 300, areaData: 0.9 },
    { capacityData: 375, areaData: 1.1 },
    { capacityData: 400, areaData: 1.17 },
    { capacityData: 450, areaData: 1.3 },
    { capacityData: 525, areaData: 1.45 },
    { capacityData: 550, areaData: 1.5 },
    { capacityData: 600, areaData: 1.6 },
    { capacityData: 630, areaData: 1.66 },
    { capacityData: 675, areaData: 1.75 },
    { capacityData: 700, areaData: 1.8 },
    { capacityData: 750, areaData: 1.9 },
    { capacityData: 800, areaData: 2 },
    { capacityData: 825, areaData: 2.05 },
    { capacityData: 900, areaData: 2.2 },
    { capacityData: 975, areaData: 2.35 },
    { capacityData: 1000, areaData: 2.4 },
    { capacityData: 1050, areaData: 2.5 },
    { capacityData: 1125, areaData: 2.65 },
    { capacityData: 1150, areaData: 2.7 },
    { capacityData: 1200, areaData: 2.8 },
    { capacityData: 1250, areaData: 2.9 },
    { capacityData: 1275, areaData: 2.95 },
    { capacityData: 1350, areaData: 3.1 },
    { capacityData: 1425, areaData: 3.25 },
    { capacityData: 1500, areaData: 3.4 },
    { capacityData: 1600, areaData: 3.56 },
    { capacityData: 1800, areaData: 3.88 },
    { capacityData: 2000, areaData: 4.2 },
    { capacityData: 2500, areaData: 5 },
    { capacityData: 2600, areaData: 5.16 },
    { capacityData: 2700, areaData: 5.32 },
    { capacityData: 2800, areaData: 5.48 },
    { capacityData: 2900, areaData: 5.64 },
    { capacityData: 3000, areaData: 5.8 },
    { capacityData: 3100, areaData: 5.96 },
    { capacityData: 3200, areaData: 6.12 },
    { capacityData: 3300, areaData: 6.28 },
    { capacityData: 3400, areaData: 6.44 },
    { capacityData: 3500, areaData: 6.6 },
    { capacityData: 3600, areaData: 6.76 },
    { capacityData: 3700, areaData: 6.92 },
    { capacityData: 3800, areaData: 7.08 },
    { capacityData: 3900, areaData: 7.24 },
    { capacityData: 4000, areaData: 7.4 },
    { capacityData: 4100, areaData: 7.56 },
    { capacityData: 4200, areaData: 7.72 },
    { capacityData: 4300, areaData: 7.88 },
    { capacityData: 4400, areaData: 8.04 },
    { capacityData: 4500, areaData: 8.2 },
    { capacityData: 4600, areaData: 8.36 },
    { capacityData: 4700, areaData: 8.52 },
    { capacityData: 4800, areaData: 8.68 },
    { capacityData: 4900, areaData: 8.84 },
    { capacityData: 5000, areaData: 9 },
    { capacityData: 5100, areaData: 9.16 },
    { capacityData: 5200, areaData: 9.32 },
    { capacityData: 5300, areaData: 9.48 },
    { capacityData: 5400, areaData: 9.64 },
    { capacityData: 5500, areaData: 9.8 },
    { capacityData: 5600, areaData: 9.96 },
    { capacityData: 5700, areaData: 10.12 },
    { capacityData: 5800, areaData: 10.28 },
    { capacityData: 5900, areaData: 10.44 },
    { capacityData: 6000, areaData: 10.6 },
    { capacityData: 6100, areaData: 10.76 },
    { capacityData: 6200, areaData: 10.92 },
    { capacityData: 6300, areaData: 11.08 },
    { capacityData: 6400, areaData: 11.24 },
    { capacityData: 6500, areaData: 11.4 },
    { capacityData: 6600, areaData: 11.56 },
    { capacityData: 6700, areaData: 11.72 },
    { capacityData: 6800, areaData: 11.88 },
    { capacityData: 6900, areaData: 12.04 },
    { capacityData: 7000, areaData: 12.2 },
    { capacityData: 7100, areaData: 12.36 },
    { capacityData: 7200, areaData: 12.52 },
    { capacityData: 7300, areaData: 12.68 },
    { capacityData: 7400, areaData: 12.84 },
    { capacityData: 7500, areaData: 13 },
    { capacityData: 7600, areaData: 13.16 },
    { capacityData: 7700, areaData: 13.32 },
    { capacityData: 7800, areaData: 13.48 },
    { capacityData: 7900, areaData: 13.64 },
    { capacityData: 8000, areaData: 13.8 },
    { capacityData: 8100, areaData: 13.96 },
    { capacityData: 8200, areaData: 14.12 },
    { capacityData: 8300, areaData: 14.28 },
    { capacityData: 8400, areaData: 14.44 },
    { capacityData: 8500, areaData: 14.6 },
    { capacityData: 8600, areaData: 14.76 },
    { capacityData: 8700, areaData: 14.92 },
    { capacityData: 8800, areaData: 15.08 },
    { capacityData: 8900, areaData: 15.24 },
    { capacityData: 9000, areaData: 15.4 },
    { capacityData: 9100, areaData: 15.56 },
    { capacityData: 9200, areaData: 15.72 },
    { capacityData: 9300, areaData: 15.88 },
    { capacityData: 9400, areaData: 16.04 },
    { capacityData: 9500, areaData: 16.2 },
    { capacityData: 9600, areaData: 16.36 },
    { capacityData: 9700, areaData: 16.52 },
    { capacityData: 9800, areaData: 16.68 },
    { capacityData: 9900, areaData: 16.84 },
    { capacityData: 10000, areaData: 17 }
];

function findAreaByCapacity(capacityArray, W) {
    const match = capacityArray.find(pair => pair.capacityData === W);
    if (match) {
        return match.areaData;
    } else {
        console.error(`No matching capacity found for ${W}`);
        return null;
    }
}




// Table7에서 area값 찾기
function calculatePersons(W) {
    let persons = Math.floor(W / 75); // Calculated persons value (rounded down)
    return persons;
}

function findAreaByPersons(persons, table7) {
    const match = table7.find(entry => entry.persons === persons);
    if (match) {
        return match.area;
    } else {
        console.log('No matching persons found');
        return null;
    }
}

const table7 = [
    { persons: 1, area: 0.28 },
    { persons: 2, area: 0.49 },
    { persons: 3, area: 0.6 },
    { persons: 4, area: 0.79 },
    { persons: 5, area: 0.98 },
    { persons: 6, area: 1.17 },
    { persons: 7, area: 1.31 },
    { persons: 8, area: 1.45 },
    { persons: 9, area: 1.59 },
    { persons: 10, area: 1.73 },
    { persons: 11, area: 1.87 },
    { persons: 12, area: 2.01 },
    { persons: 13, area: 2.15 },
    { persons: 14, area: 2.29 },
    { persons: 15, area: 2.43 },
    { persons: 16, area: 2.57 },
    { persons: 17, area: 2.71 },
    { persons: 18, area: 2.85 },
    { persons: 19, area: 2.99 },
    { persons: 20, area: 3.13 },
    { persons: 21, area: 3.245 },
    { persons: 22, area: 3.36 },
    { persons: 23, area: 3.475 },
    { persons: 24, area: 3.59 },
    { persons: 25, area: 3.705 },
    { persons: 26, area: 3.82 },
    { persons: 27, area: 3.935 },
    { persons: 28, area: 4.05 },
    { persons: 29, area: 4.165 },
    { persons: 30, area: 4.28 },
    { persons: 31, area: 4.395 },
    { persons: 32, area: 4.51 },
    { persons: 33, area: 4.625 },
    { persons: 34, area: 4.74 },
    { persons: 35, area: 4.855 },
    { persons: 36, area: 4.97 },
    { persons: 37, area: 5.085 },
    { persons: 38, area: 5.2 },
    { persons: 39, area: 5.315 },
    { persons: 40, area: 5.43 },
    { persons: 41, area: 5.545 },
    { persons: 42, area: 5.66 },
    { persons: 43, area: 5.775 },
    { persons: 44, area: 5.89 },
    { persons: 45, area: 6.005 },
    { persons: 46, area: 6.12 },
    { persons: 47, area: 6.235 },
    { persons: 48, area: 6.35 },
    { persons: 49, area: 6.465 },
    { persons: 50, area: 6.58 },
    { persons: 51, area: 6.695 },
    { persons: 52, area: 6.81 },
    { persons: 53, area: 6.925 },
    { persons: 54, area: 7.04 },
    { persons: 55, area: 7.155 },
    { persons: 56, area: 7.27 },
    { persons: 57, area: 7.385 },
    { persons: 58, area: 7.5 },
    { persons: 59, area: 7.615 },
    { persons: 60, area: 7.73 },
    { persons: 61, area: 7.845 },
    { persons: 62, area: 7.96 },
    { persons: 63, area: 8.075 },
    { persons: 64, area: 8.19 },
    { persons: 65, area: 8.305 },
    { persons: 66, area: 8.42 }
];




// runCalculations function
function runCalculations(CA, CB, DT, JJ, NOE, W) {
    let AA = calculateProductIndex(CA, CB, DT, JJ, NOE);
    let areaData = findAreaByCapacity(capacityAreaPairs, W);
    let persons = calculatePersons(W);
    let areaOfTable7 = findAreaByPersons(persons, table7);

    const result = {
        CA: CA,
        CB: CB,
        JJ: JJ,
        DT: DT,
        NOE: NOE,
        W: W,
        persons: persons,
        AA: AA,
        areaData: areaData,
        areaOfTable7: areaOfTable7,
        result: areaData >= AA && areaOfTable7 <= AA ? '검토결과: OK' : '검토결과: Error'
    };

    return result;
}




module.exports = {
    caPairs,     // Exporting data array for CA
    cbPairs,     // Exporting data array for CB
    jjPairs,     // Exporting data array for JJ
    noePairs,    // Exporting data array for NOE
    wPairs,      // Exporting data array for W
    findCA,      // Exporting function to find CA values
    findCB,      // Exporting function to find CB values
    findJJ,      // Exporting function to find JJ values
    findNOE,     // Exporting function to find NOE values
    findW,       // Exporting function to find W values
    runCalculations // Exporting the main calculation function
};

