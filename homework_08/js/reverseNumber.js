function reverseNumber(num) {
    num = num + '';
    let n = num.split('').reverse().join('');
    return parseInt(n) * Math.sign(num);
}

// console.log(reverseNumber(-456));