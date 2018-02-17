function getClosestToZero() {
    let num = 0,
        closestZero;
    closestZero = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        if (Math.abs(num - arguments[i]) < Math.abs(num - closestZero)) {
            closestZero = arguments[i];
        }
    }
    return closestZero;
}

// console.log(getClosestToZero(9, 5, -4, -9));