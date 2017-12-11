'use strict';
module.exports = data => {
    const postition = { x: 0, y: 0 };
    let max = 0;

    const check = pos => {
        const x = Math.abs(pos.x);
        const y = Math.abs(pos.y);

        return x / 2 > y ? Math.ceil(x / 2) : Math.max(x, y);
    };

    data.trim().split(',').forEach(x => {
        switch (x) {
        case 'n':
            postition.x++;
            break;
        case 'nw':
            postition.x++;
            postition.y--;
            break;
        case 'ne':
            postition.x++;
            postition.y++;
            break;
        case 's':
            postition.x--;
            break;
        case 'sw':
            postition.x--;
            postition.y--;
            break;
        case 'se':
            postition.x--;
            postition.y++;
            break;
        default:

        }
        max = Math.max(check(postition), max);
    });
    return max;
};
