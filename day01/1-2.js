'use strict';
module.exports = data => {
    data = data.trim().split('');

    const result = data.reduce((total, currentValue, currentIndex, arr)=>{
        const half = arr.length / 2;
        const nextIndex = arr[currentIndex + half] ? currentIndex + half : Math.abs(half-currentIndex);
        const nextValue = arr[nextIndex];
        return currentValue === nextValue ? total+parseInt(currentValue) : total;
    },0);

    return result;
};
