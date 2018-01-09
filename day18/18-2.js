'use strict';
class Program {
    constructor(id, commands) {
        this.commands = commands;
        this.positiond = id;
        this.registers = { p: id };
        this.queue = [];
        this.position = 0;
        this.sent = 0;
        this.counter = 0;
    }

    run() {
        let locked = false;
        const getValue = (registers, command) => isNaN(Number(command)) ? registers[command] : Number(command);

        while (!locked) {
            const command = this.commands[this.position];

            switch (command[0]) {
            case 'snd':
                this.sent++;
                this.link.queue.push(getValue(this.registers, command[1]));
                break;
            case 'set':
                this.registers[command[1]] = getValue(this.registers, command[2]);
                break;
            case 'add':
                this.registers[command[1]] += getValue(this.registers, command[2]);
                break;
            case 'mul':
                this.registers[command[1]] *= getValue(this.registers, command[2]);
                break;
            case 'mod':
                this.registers[command[1]] %= getValue(this.registers, command[2]);
                break;
            case 'rcv':
                if (this.queue.length > 0) {
                    this.registers[command[1]] = this.queue.shift();
                } else {
                    locked = true;
                    return this.counter++;
                }
                break;
            default :
                break;
            }

            this.position += (command[0] === 'jgz' && getValue(this.registers, command[1]) > 0) ? getValue(this.registers, command[2]) : 1;

        }
    }

    link(p) {
        this.link = p;
    }
}



module.exports = commands => {
    commands = commands.split('\n').map(command => command.split(' '));

    const program1 = new Program(0, commands);
    const program2 = new Program(1, commands);
    let loops = 0;

    program1.link(program2);
    program2.link(program1);

    while (loops++ < 100) {
        program1.run();
        program2.run();

    }
    return program2.sent;
};
