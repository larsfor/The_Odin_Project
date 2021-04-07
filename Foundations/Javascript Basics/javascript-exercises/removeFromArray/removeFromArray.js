const removeFromArray = function(array, ...excludes) {
    let newArray = array.filter(item => !excludes.includes(item));

    return newArray;
}

module.exports = removeFromArray
