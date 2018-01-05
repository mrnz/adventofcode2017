'use strict';
const day16 = module.exports = {

    getMap: length => 'abcdefghijklmnopqrstuvwxyz'.slice(0, length),

    makeStep: (map, line) => {
        const command = line.slice(0, 1),
            rest = line.slice(1),
            arr = rest.split('/');

        if (command === 's') {
            map.unshift(...map.splice(-rest));
        } else if (command === 'x') {
            [map[arr[0]], map[arr[1]]] = [map[arr[1]], map[arr[0]]];
        } else {
            arr[0] = map.indexOf(arr[0]);
            arr[1] = map.indexOf(arr[1]);
            [map[arr[0]], map[arr[1]]] = [map[arr[1]], map[arr[0]]];
        }
        return map;
    },

    init: (length, commands, times = 1) => {
        let map = day16.getMap(length).split('');

        const startPoint = day16.getMap(length),
            list = commands.trim().split(','),
            move = command => {
                map = day16.makeStep(map, command);
            };

        for (let i = 0; i < times; i++) {
            list.forEach(move);
            if (map.join('') === startPoint) {
                i += (Math.floor(times / (i + 1)) - 1) * (i + 1);
            }
        }

        return map.join('');
    }
};
