'use strict';
const day7 = module.exports = {

    allInArrayAreNumbers: array => {
        let result = true;

        array.forEach(x => {
            if (typeof x !== 'number') {
                result = false;
            }
        });
        return result;
    },

    prepareDate: input => input.trim()
        .split('\n')
        .map(row => {
            let name, weight, tower;

            [name, tower] = row.split(' -> ');
            [name, weight] = name.split(' (');
            weight = parseInt(weight, 10);
            tower = tower ? tower.split(', ') : [];

            return {
                name,
                weight,
                tower
            };
        }),

    separeteItems: input => {
        const lastLevel = new Map(),
            rest = [];

        input.forEach(item => {
            if (!item.tower.length) {
                lastLevel.set(item.name, item.weight);
            } else {
                rest.push(item);
            }
        });

        return [rest, lastLevel];
    },

    replacementItems: (restItems, lastLev) => {

        const result = restItems.map(item => {

            const res = Object.assign({}, item);

            res.prev = res.prev ? res.prev : {};

            lastLev.forEach((weight, name) => {
                const thisIndex = res.tower.indexOf(name);


                if (thisIndex !== -1) {
                    res.prev[thisIndex] = res.tower[thisIndex];
                    res.tower[thisIndex] = weight;

                }
            });
            return res;
        });

        return result;
    },

    reduceItems: restItems => {
        const result = restItems.map(item => {

            if (item.tower[0] * item.tower.length === item.tower.reduce((p, c) => p + c, 0)) {

                item.weight += item.tower[0] * item.tower.length;
                item.tower = [];
            }
            return item;
        });

        return result;
    },

    valid: input => {

        let rrr = false;

        function findDuplicate(arr) {
            const result = arr.filter((value, index, array) => array.indexOf(value) !== index)[0];

            return result;
        }

        input.forEach(item => {

            if (!day7.allInArrayAreNumbers(item.tower)) {
                return;
            }

            // if (!(item.tower[0] * item.tower.length === item.tower.reduce((p, c) => p + c, 0))) {
            const abc = findDuplicate(item.tower);
            const inn = item.tower.reduce((x,c,i)=>c!==abc?[c,i]:x,null);

            if (inn !== null) {
                rrr = [item.prev[inn[1]], abc - inn[0]];
            }

            // }

        });
        return rrr;


    },

    init: data => {
        let rest,
            lastLevel;
        const mapAllW = {};

        rest = day7.prepareDate(data);
        rest.forEach(x => {
            mapAllW[x.name] = x.weight;
        });

        while (!day7.valid(rest)) {
            [rest, lastLevel] = day7.separeteItems(rest);
            rest = day7.replacementItems(rest, lastLevel);
            rest = day7.reduceItems(rest, lastLevel);
        }

        return mapAllW[day7.valid(rest)[0]] + day7.valid(rest)[1];
    }
};
