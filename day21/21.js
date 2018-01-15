'use strict';
const day21 = module.exports = {

    part1: input => {
        let map = ['.#.', '..#', '###'];

        for (let i = 1; i <= 1; i++) {
            const size = map.length % 2;

            console.log(size);
        }

        map.push(map.shift());

        console.log(map);

        return 1;
    }
};
