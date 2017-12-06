'use strict';
const common = module.exports = {
    findBankToRedistribute: memeoryBank => memeoryBank.indexOf(Math.max(...memeoryBank)),

    cycle: (memeoryBank, highestIndex) => {
        let blocksInMemory = memeoryBank[highestIndex];

        memeoryBank[highestIndex] = 0;

        while (blocksInMemory--) {
            highestIndex = typeof memeoryBank[highestIndex + 1] !== 'undefined' ? ++highestIndex : 0;
            memeoryBank[highestIndex] += 1;
        }
        return memeoryBank;

    },
    init: data => {
        const memoryBanks = data.trim().split('\t').map(Number);
        const results = new Map();
        let lastResult = memoryBanks.join();

        while (!results.has(lastResult)) {
            results.set(memoryBanks.join(), results.size);
            common.cycle(memoryBanks, common.findBankToRedistribute(memoryBanks));
            lastResult = memoryBanks.join();
        }
        return [results.size, results.size - results.get(lastResult)];
    },
    day6part1: input => common.init(input)[0],
    day6part2: input => common.init(input)[1]
};
