const reverseString = function(string) {
    let stringArray = string.split("");
    let reverseArray = stringArray.reverse();
    let arrayString = reverseArray.join("");
    return arrayString;
};

// Do not edit below this line
module.exports = reverseString;
