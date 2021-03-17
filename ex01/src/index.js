
function myFunction(myObj) {
    return myObj;
}
var myPet = {
    species: "Maltezer",
    name: "Bobi",
    legs: 4,
    friends: [ 'Aida', 'Amra' ]
};

console.log(myFunction(myPet));

module.exports = { myPet, myFunction };
