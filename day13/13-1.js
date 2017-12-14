'use strict';
module.exports = data => {
    const map = new Map();

    data = data.trim().split('\n').forEach(x => {
        const [z, y] = x.split(':').map(Number);

        for (let i = map.size; i < z; i++) {
            map.set(i, false);
        }
        map.set(z, y);
    });
    let pico = 0;
    let counter = 0;

    while (pico < map.size) {
        let depth = map.get(pico);
        if (!depth) {
            pico++;
            continue;
        }

        let cycle = Math.floor(pico / map.get(pico));
        console.log(cycle);
        console.log(cycle%2);
        console.log(pico % map.get(pico));
        console.log('---');
        pico++;
    }

    return map;
};
