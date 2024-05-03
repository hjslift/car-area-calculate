// aaCal.js

// Door Type에 따른 계수값
function checkDoorType(DT) {
    if (DT === "1SCO") {
        return 0;
    } else if (DT === "2SCO" || DT === "2SSO") {
        return 1;
    } else {
        return null;
    }
}

// FA(Front Area) 계산
function calculateProduct(DT, JJ, NOE) {
    let coefficient = checkDoorType(DT);
    if (coefficient === null) {
        console.log("Invalid Door Type");
        return null;
    }
    let FA = ((JJ / 2) * 0.001) * 0.11 * NOE * coefficient;
    FA = Number(FA.toFixed(4));
    console.log("FA:" + FA);
    return FA;
}

// AA(유효면적 available area) 계산
function calculateProductIndex(CA, CB, DT, JJ, NOE) {
    let FA = calculateProduct(DT, JJ, NOE);
    if (FA === null) return null;
    let AA = (CA * 0.001) * (CB * 0.001) + FA;
    return parseFloat(AA.toFixed(4));
}

module.exports = {
    calculateProduct,
    calculateProductIndex
};
