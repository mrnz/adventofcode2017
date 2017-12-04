'use strict';
module.exports = data => {
    data = data.trim().split('\n');

    const result = data.reduce((total, currentValue, currentIndex, arr)=>{
        const rowResultArr = [];

        currentValue.split('\t').forEach((curVal, index, rowArr)=>{

            rowArr.forEach(val=>{
                if(parseInt(val)%parseInt(curVal) === 0 && val !== curVal) {
                    rowResultArr.push(val,curVal);
                }
            });

        });
        return total + parseInt(rowResultArr[0]) /  parseInt(rowResultArr[1]);
    },0);
    return result;
};
