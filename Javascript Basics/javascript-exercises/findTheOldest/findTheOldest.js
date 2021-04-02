let findTheOldest = function(array) {
    let age = 0;
    let yearOfDeath = 0;
    return oldest = array.reduce((obj, item) => {
        
        // If person isn't dead yet, use current year
        if (!item.yearOfDeath) {
            yearOfDeath = new Date().getFullYear();
        } else {
            yearOfDeath = item.yearOfDeath;
        }
        
        // If the current persons age > largest age so far, replace the person
        if (yearOfDeath - item.yearOfBirth > age) {
            age = yearOfDeath - item.yearOfBirth;
            obj["name"] = item.name;
        }
        return obj;
    }, {})
}


module.exports = findTheOldest