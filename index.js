// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, search) {
    return drivers.filter(driver => driver.toLowerCase() === search.toLowerCase());
  }
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}  
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
