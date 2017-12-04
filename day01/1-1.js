'use strict';
module.exports = data => {

    return data
        .trim()
        .split('')
        .reduce((total, currentValue, currentIndex, arr)=>{

            const nextValue = arr[currentIndex+1] || arr[0];

            return currentValue === nextValue ? total+parseInt(currentValue) : total;

        },0);
        
};
