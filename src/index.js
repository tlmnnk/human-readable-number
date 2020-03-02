module.exports = function toReadable (number) {

    let str = "";
    let isTeen = false;
    let array =  number.toString().split("").map(x => parseInt(x)).reverse();
    
    if (array.length === 1 && array[0] === 0) return "zero";

    if (array.length === 3) {
        str += getNumber(array[2]) + " hundred";
    }
    
    if (array.length > 1) {
        if (array[1] === 1) {
            str += teen(array[0]);
            isTeen = true;
        } else {
            str += ty(array[1]);
        }
    }

    str += isTeen ? "" : getNumber(array[0]);
    
    return str.trim();
};

function getNumber (number) {
    switch (number) {
        case 1:
            return " one";
        case 2:
            return " two";
        case 3:
            return " three";
        case 4:
            return " four";
        case 5:
            return " five";
        case 6:
            return " six";
        case 7:
            return " seven";
        case 8:
            return " eight";
        case 9:
            return " nine";
        case 0:
            return "";
    }
}

function teen(number){
    switch (number) {
        case 0:
            return " ten";
        case 1:
            return " eleven";
        case 2:
            return " twelve";
        case 3:
            return " thirteen";
        case 4:
            return " fourteen";
        case 5:
            return " fifteen";
        case 6:
            return " sixteen";
        case 7:
            return " seventeen";
        case 8:
            return " eighteen";
        case 9:
            return " nineteen";
    }
}

function ty(number){
    switch (number) {
        case 0:
            return "";
        case 2:
            return " twenty";
        case 3:
            return " thirty";
        case 4:
            return " forty";
        case 5:
            return " fifty";
        case 6:
            return " sixty";
        case 7:
            return " seventy";
        case 8:
            return " eighty";
        case 9:
            return " ninety";
    }
}