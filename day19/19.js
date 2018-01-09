'use strict';
const day19 = module.exports = {

    nextPostion: (dir, pos) => {
        switch (dir) {
        case 'down':
            pos.y++;
            break;
        case 'up':
            pos.y--;
            break;
        case 'left':
            pos.x--;
            break;
        default:
            pos.x++;
            break;
        }
        return pos;
    },

    findNewDirection: (oldDirection, position, map) => {
        let newDirection;

        if (oldDirection === 'up' || oldDirection === 'down') {
            if (map[position.y][position.x + 1] && (map[position.y][position.x + 1] === '-' || map[position.y][position.x + 1].match(/[a-z,A-Z]/))) {
                newDirection = 'right';
            } else if (map[position.y][position.x - 1] && (map[position.y][position.x - 1] === '-' || map[position.y][position.x - 1].match(/[a-z,A-Z]/))) {
                newDirection = 'left';
            }
        } else {
            if (map[position.y + 1] && map[position.y + 1][position.x] && (map[position.y + 1][position.x] === '|' || map[position.y + 1][position.x].match(/[a-z,A-Z]/))) {
                newDirection = 'down';
            } else if (map[position.y - 1] && map[position.y - 1][position.x] && (map[position.y - 1][position.x] === '|' || map[position.y - 1][position.x].match(/[a-z,A-Z]/))) {
                newDirection = 'up';
            }
        }
        return newDirection;
    },

    init: (input, part) => {
        let i = 0,
            pos = {},
            result = '',
            currChar = '|',
            direction = 'down';

        input = input.split('\n').slice(0, -1);
        pos.x = input[0].indexOf('|');
        pos.y = 0;

        while (currChar && currChar !== ' ' && ++i) {
            direction = (currChar === '+') ? day19.findNewDirection(direction, pos, input) : direction;
            result += currChar.match(/[a-z,A-Z]/) ? currChar : '';
            pos = day19.nextPostion(direction, pos);
            currChar = input[pos.y][pos.x];
        }
        return part ? i : result;
    }
};
