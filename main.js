///////////////Completed!
function isEvenlyDivisible(divideInto, dividedBy) {
    if (divideInto % dividedBy === 0) {
        return true;
    } else {
        return false;
    }
}

//////////////////Completed!!
function halfSquare(num) {
    return (num * num / 2);

}

function exclaim(str) {
    console.log(str);
    for (let char = 0; char < str.length; char++) {
        console.log(str.length)
        const point = str[char];
        console.log(point);
        while (point[char] !== '!') {

        }
    }
}

function isLong(str) {
    if (str.length >= 15) {
        return true;
    } else {
        return false;
    }
}

function containsDigit(str) {
    if (typeof Number(str) === 'number') {
        return true;
    } else {
        return false;
    }
}

function containsLowerCase(str) {
    if (str.toUpperCase !== str) {
        return false
    } else { return true; }
}

function containsUpperCase(str) {
    if (str.toUpperCase === str) {
        return true;
    } else { return false }
}


function containsNonAlphanumeric(str) {
    if (containsDigit(str) || containsLowerCase(str) || containsUpperCase(str) === true) {
        return false;
    } else { return true }

}

function containsSpace(str) {
    for (let i = 0; i < str.length; i++) {
        const spaceCase = str[i];
        if (spaceCase === ' ') {
            return true;
        } else { return false }
    }
}

function countWords(str) {
    return str.length;
}

function digits(digi) {
    let digiTemp = [];
    if (digi >= 0) {
        for (let i = 0; i < digi.length; i++) {
            if (digi[i] !== '.') {
                digiTemp.push(Number(digi[i]));
            }
        }
    }
    if (digi < 0) {

        for (let i = 0; i < digi.length; i++) {
            digiTemp.push(Math.abs(Number(digi[i])));

        }
    }
}

function truncate(str15) {
    let shortStr = ''
    if (str15.length >= 15) {
        for (let i = 0; i < str15.length; i++) {
            while (i < 8) {
                shortStr.push(str15[i]);
            }
        }
        shortStr.push('...');

    } else {
        shortStr = str15;
    }
    return shortStr;
}

function isValidPassword(passMe) {
    if (containsDigit === false) {
        return console.log('Invalid Password - Needs a Digit');

    }
    if (containsLowerCase === false) {
        return console.log('Invalid Password - Needs a Lowercase Letter');

    }
    if (containsNonAlphanumeric === false) {
        return console.log('Invalid Password - Needs a Non-Alphanumeric')

    }
    if (containsUpperCase) {
        return console.log('Invalid Password - Needs and Uppercase Letter.')
    } else {
        return true;
    }
}


function onlyPunchy(title) {
    let titleTemp = [];
    let secondTemp = ''
    let titles = [];
    for (let i = 0; i < title.length; i++) {
        const titleName = title[i];
        if (titleName.length < 15) {
            if (titleName.pop !== '!') {
                titles.push(titleName + '!');
            } else {
                for (let i = 0; i < titleName.length; i++) {
                    const checker = titleName[i];
                    if (checker !== '!') {
                        secondTemp.push(checker);
                    }
                    if (checker === '!') {
                        titles.push(secondTemp + '!');
                    }
                }
                return titles;
            }
            titleTemp.push(titles);
        }
    }
}


module.exports = {
    isEvenlyDivisible,
    halfSquare,
    exclaim,
    isLong,
    containsDigit,
    containsLowerCase,
    containsUpperCase,
    containsNonAlphanumeric,
    containsSpace,
    countWords,
    digits,
    truncate,
    isValidPassword,
    onlyPunchy,
}