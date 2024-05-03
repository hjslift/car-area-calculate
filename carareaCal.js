// carareaCal.js
const { calculateProductIndex } = require('./aaCal');
const { findAreaByCapacity, capacityAreaPairs } = require('./table5');
const { calculateProduct, findAreaByPersons, table7 } = require('./table7');

function calculateCarArea(CA, CB, JJ, DT, NOE, W) {
    const availableA = calculateProductIndex(CA, CB, DT, JJ, NOE);
    const areaForTable5 = findAreaByCapacity(capacityAreaPairs, W);
    const persons = calculateProduct(W);
    const match = findAreaByPersons(persons, table7);

    if (match) {
        const result = {
            calculate: {
                availableA: availableA.toFixed(2),
                areaForTable5: areaForTable5.toFixed(2),                
                areaForPersons: match.area.toFixed(2)
            },
            result: {
                CA,
                CB,
                JJ,
                DT,
                NOE,
                W,
                persons: `${persons} 인승`,
                reviewResult: availableA >= match.area || availableA <= areaForTable5 ? '**카면적 검토 결과 : 적합' : '카면적 검토 결과 : 부적합'
            }
        };
        return result;
    } else {
        return {
            calculate: {
                availableA: availableA.toFixed(2),
                areaForTable5: areaForTable5.toFixed(2),                
                areaForPersons: 'No data available'
            },
            result: {
                CA,
                CB,
                JJ,
                DT,
                NOE,
                W,
                persons: `${persons} 인승`,
                reviewResult: 'No area data available for these persons.'
            }
        };
    }
}

module.exports = { calculateCarArea };
