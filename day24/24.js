'use strict';

class Bridge {
    constructor(allPins, history = [], strength = 0, lastPin = 0) {
        this.allPins = allPins.slice();
        this.history = history.slice();
        this.strength = strength;
        this.lastPin = lastPin;
    }

    findNextChips() {
        return this.allPins.filter(item => item.includes(this.lastPin));
    }

    copy() {
        return new Bridge(this.allPins, this.history, this.strength, this.lastPin);
    }

    addChip(chip) {
        let index = null;

        this.allPins.forEach((item, idx) => {
            if (item[0] === chip[0] && item[1] === chip[1]) {
                index = idx;
            }
        });

        this.allPins.splice(index, 1);

        this.history.push(chip.slice());
        if (chip[0] !== chip[1]) {
            this.lastPin = chip.filter(x => x !== this.lastPin)[0];
        } else {
            this.lastPin = chip[0];
        }

    }

}

const day24 = module.exports = {
    prepareData: input => input
        .trim()
        .split('\n')
        .map(item => item
            .split('/')
            .map(Number)
        ),

    calc: input => {
        const allPins = day24.prepareData(input);
        const queue = [new Bridge(allPins)];
        const result = [];

        while (queue.length) {
            const actualBridge = queue.shift();
            const nextPinsArr = actualBridge.findNextChips();

            if (nextPinsArr.length === 0) {
                result.push(actualBridge.history);
            }

            while (nextPinsArr.length) {
                const actualChip = nextPinsArr.shift();
                const newBridge = actualBridge.copy();

                newBridge.addChip(actualChip);
                queue.push(newBridge);
            }
        }

        return result;
    },

    part1: input => day24
        .calc(input)
        .map(item => item.reduce((total, num) => total + num[0] + num[1], 0))
        .reduce((total, num) => total < num ? num : total, 0),

    part2: input => {
        let l = 0;
        const result = day24.calc(input);

        result.forEach(item => {
            l = item.length > l ? item.length : l;
        });
        return result
            .filter(item => item.length === l)
            .map(item => item.reduce((total, num) => total + num[0] + num[1], 0))
            .reduce((total, num) => total > num ? total : num, 0);
    }
};
