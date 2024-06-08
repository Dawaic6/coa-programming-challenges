function transformString(str) {
    const length = str.length;

    let result = '';

    if (length % 15 === 0) {
        for (let i = length - 1; i >= 0; i--) {
            result += String.fromCharCode(str.charCodeAt(i));
        }
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        for (let i = length - 1; i >= 0; i--) {
            result += String.fromCharCode(str.charCodeAt(i));
        }
    } else if (length % 5 === 0) {
        result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        result = str;
    }

    return result;
}

console.log(transformString("Hamburger"));
console.log(transformString("Pizza")); 
console.log(transformString("Chocolate Chip Cookie")); 
console.log(transformString("Length15Exactly"));
