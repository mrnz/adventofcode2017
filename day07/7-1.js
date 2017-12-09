'use strict';
module.exports = data => data.trim()
    .split('\n')
    .map(row => row.split(' -> '))
    .filter(row => row[1])
    .reduce((total, item, idx, fullArray) => {
        let result = true;

        fullArray.forEach(item2 => {
            if (item2[1].indexOf(item[0].split(' ')[0]) !== -1) {
                result = false;
            }
        });
        return (result ? item[0].split(' ')[0] : total);
    }, 'not found');
