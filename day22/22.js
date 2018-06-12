/* eslint indent: ["error", 4, { "SwitchCase": 1 }] */
/* eslint prefer-const: ["error", {"destructuring": "all"}] */

'use strict';

const day22 = module.exports = {
    prepareInput(input) {
        const table = new Map();
        let X = 0,
            Y = 0;

        input.split('\n')
            .forEach((y, yi) => y.split('')
                .forEach((x, xi) => {
                    table.set(`${xi}x${yi}`, x);
                    X = X < xi ? xi : X;
                    Y = Y < yi ? yi : Y;
                }));
        return [table, { x: X / 2, y: Y / 2 }];
    },

    dirArr: ['up', 'right', 'down', 'left'],

    getPosStr(pos) {
        return `${pos.x}x${pos.y}`;
    },

    turn(pos, actualNode, direction) {
        const index = day22.dirArr.indexOf(direction);
        let nextDir = direction;

        if (actualNode === '.' || typeof actualNode === 'undefined') {
            nextDir = day22.dirArr[index - 1] || day22.dirArr[day22.dirArr.length - 1];
        } else if (actualNode === 'F') {
            nextDir = day22.dirArr[index + 2] || day22.dirArr[index - 2];
        } else if (actualNode === '#') {
            nextDir = day22.dirArr[index + 1] || day22.dirArr[0];
        }
        return nextDir;
    },

    toggleNode(node) {
        return (node === '#') ? '.' : '#';
    },

    toggleNode2(node) {
        switch (node) {
            case '.':
                return 'W';
            case 'W':
                return '#';
            case '#':
                return 'F';
            case 'F':
                return '.';
            default:
                return 'W';
        }
    },

    move(position, direction) {
        switch (direction) {
            case 'up':
                position.y--;
                break;
            case 'down':
                position.y++;
                break;
            case 'right':
                position.x++;
                break;
            case 'left':
                position.x--;
                break;
            default:
                break;
        }
        return position;
    },

    run(input, iterations, part2) {
        let [table, position] = day22.prepareInput(input);
        let direction = 'up',
            i = iterations,
            result = 0;

        while (i--) {
            const actualNode = table.get(day22.getPosStr(position)),
                toggledNode = part2 ? day22.toggleNode2(actualNode) : day22.toggleNode(actualNode);

            direction = day22.turn(position, actualNode, direction);
            table.set(day22.getPosStr(position), toggledNode);
            result += toggledNode === '#' ? 1 : 0;
            position = day22.move(position, direction);
        }
        return result;
    },
    part1: (input, iterations) => day22.run(input, iterations, false),
    part2: (input, iterations) => day22.run(input, iterations, true)
};
