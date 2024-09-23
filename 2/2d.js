const ages = [25, 31, 42, 77]; // declare ages array

const agesMulted = ages.map((age) => { // declare second array for after multing, map ages to it
    if (age < 70) { // for each age in ages, check if under 70
        return age * 2; // if so, return it doubled
    }
    return age; // else, return it as is. no else needed as earlier return will exit scope by returning if num less than 70
})

console.log(agesMulted);