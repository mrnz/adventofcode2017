'use strict';
module.exports = data => {

    return data
        .trim()
        .split('\n')
        .reduce((total, currentValue, currentIndex, arr)=>{

            const row = currentValue.split('\t').reduce((all, curVal)=>{

                if(!curVal) return all;
                all[0] = all[0] ? Math.min(parseInt(curVal), all[0]) : parseInt(curVal);
                all[1] = all[1] ? Math.max(parseInt(curVal), all[1]) : parseInt(curVal);

                return all;

            },[]);

            return total + row[1] - row[0];

    },0);

};
