const reverseString = function(string) {
    let newString = "";
    let strLength = string.length;
    let scanner = strLength - 1;
    for(let i = strLength - 1; i>=0; i--){
        let lastChar = string.slice(scanner, scanner+1);
        newString += lastChar;
        scanner--;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
