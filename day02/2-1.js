'use strict';
module.exports = data => {
    data = data.trim().split('\n');

    const result = data.reduce((total, currentValue, currentIndex, arr)=>{

        const row = currentValue.split('\t').reduce((all, curVal)=>{

            if(!curVal) return all;
            all[0] = all[0] ? Math.min(parseInt(curVal), all[0]) : parseInt(curVal);
            all[1] = all[1] ? Math.max(parseInt(curVal), all[1]) : parseInt(curVal);

            return all;

        },[]);

        return total + row[1] - row[0];

    },0);

    return result;
};
