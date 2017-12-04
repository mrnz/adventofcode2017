'use strict';
module.exports = data => {

    data = data.trim().split('');

    const result = data.reduce((total, currentValue, currentIndex, arr)=>{

        const nextValue = arr[currentIndex+1] || arr[0];

        return currentValue === nextValue ? total+parseInt(currentValue) : total;

    },0);

    return result;
};
