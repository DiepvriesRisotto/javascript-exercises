const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return "ERROR";
    }

    if(typeof min !== "number" || typeof max !== "number") {
        return "ERROR";
    }

    if (min > max) {
        [min, max] = [max, min];
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
