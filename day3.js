'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let contadorN = 0;
    let contadorP = 0;
    let contadorZ = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            contadorN++;
        } else if (arr[i] > 0) {
            contadorP++;
        } else {
            contadorZ++;
        }
    }

    const pos = contadorP / arr.length;
    const neg = contadorN / arr.length;
    const zer = contadorZ / arr.length;
    
    console.log(pos)
    console.log(neg)
    console.log(zer)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
