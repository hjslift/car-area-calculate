// table7.js
function calculateProduct(W) {
    let persons = Math.floor(W / 75); // 계산된 persons 값 (소수점 이하 버림)
    return persons;
}

function findAreaByPersons(persons, table7) {
    const match = table7.find(entry => entry.persons === persons);
    if (match) {
        return match;  // Return the entire match object for flexibility
    } else {
        return null;
    }
}

// 표7. 엘리베이터의 정원 및 최소 카 유효면적
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

module.exports = { calculateProduct, findAreaByPersons, table7 };
