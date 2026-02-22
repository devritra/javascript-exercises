const sumAll = function(int1, int2) {
    let sum = 0;
    let firstLimit;
    let lastLimit;
    if(int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)){
        return "ERROR";
    } else if(int1 < int2){
        firstLimit = int1;
        lastLimit = int2;
    } else if (int1 > int2){
        firstLimit = int2;
        lastLimit = int1;
    }
    for(let i = firstLimit; i<=lastLimit; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
