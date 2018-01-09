'use strict';
const day18 = module.exports = {

    makeStep: (command, registers) => {
        command = command.split(' ');

        if (command.length === 3) {
            command[2] = isNaN(Number(command[2])) ? registers[command[2]] : Number(command[2]);
        }

        switch (command[0]) {
        case 'snd':
            registers.last = registers[command[1]];
            registers[command[1]] = 0;
            break;
        case 'set':
            registers[command[1]] = command[2];
            break;
        case 'add':
            registers[command[1]] += command[2];
            break;
        case 'mul':
            registers[command[1]] *= command[2];
            break;
        case 'mod':
            registers[command[1]] = registers[command[1]] % command[2];
            break;
        case 'rcv':
            if (registers[command[1]] !== 0) {
                registers.rcv = registers.last;
            }
            break;
        default:
            if (registers[command[1]] !== 0) {
                registers.jump = command[2];
            }
            break;
        }
        return registers;
    },
    init: input => {
        let registers = {},
            possition = 0;
        const commands = input.trim().split('\n');

        while (!registers.rcv) {

            registers = day18.makeStep(commands[possition], registers);
            if (registers.jump) {
                possition += registers.jump;
                registers.jump = 0;
            } else {
                possition++;
            }
        }
        return registers.rcv;
    }
};
