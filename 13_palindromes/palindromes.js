const palindromes = function (str="") {
    const alphanumerical = "abcdefghijklmnopqrst0123456789";
    let cleanedString = str
    .toLowerCase()
    .split("")
    .filter((character)=>alphanumerical.includes(character))
    .join("");
    let reversedString = cleanedString.split("").reverse().join("");
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
