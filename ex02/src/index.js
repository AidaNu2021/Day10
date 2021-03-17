
var myClothes = {
    hat = "Fedora",
    shirt = "Nike",
    schoes = "Konverse"
};
function myFunction(myObj) {
    return myObj;
}
   
function dotNotation(myClothes) {
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var schoesValue = myClothes.shoes
    return { hatValue, shirtValue, schoesValue };
}
console.log(dotNotation(myClothes));
module.exports = myFunction(myClothes);
