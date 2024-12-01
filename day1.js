// import and read the input file
const fs = require('fs'); // file system
const path = require('path'); // path module



function part1() {
    const input = fs.readFileSync(path.resolve(__dirname, 'day1.txt'), 'utf8');
    const lines = input.split('\n');
    const leftSide = [];
    const rightSide = [];
    for (line of lines) {
        const split = line.split('  ');
        leftSide.push(split[0]);
        rightSide.push(split[1].trim());
    }

    const leftSorted = leftSide.sort((a, b) => a - b);
    const rightSorted = rightSide.sort((a, b) => a - b);
    // console.log(leftSorted.length, rightSorted.length);
    let total = 0
    for (let i = 0; i < leftSorted.length; i++) {
        const distance = Math.abs(leftSorted[i] - rightSorted[i]);
        total += distance;
    }
    return total

}

function part2() {
    const input = fs.readFileSync(path.resolve(__dirname, 'day1.txt'), 'utf8');
    const lines = input.split('\n');
    const leftSide = [];
    const rightSide = [];
    for (line of lines) {
        const split = line.split('  ');
        leftSide.push(split[0]);
        rightSide.push(split[1].trim());
    }
    let total = 0;
    for (number of leftSide) {
        const occurences = rightSide.filter(num => num === number).length;
        const simililarity = occurences * number;
        total += simililarity;
    }
    
    return total

}

const output = part2();

console.log('output is:', output);