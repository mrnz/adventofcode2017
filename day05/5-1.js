'use strict';
module.exports = data => {

    let position = 0,
        counter = 0;

    data = data.trim()
        .split('\n')
        .map(x=>parseInt(x));

    while(data[position] !== undefined){
        position += data[position]++;
        counter++;
    }

    return counter;

};
