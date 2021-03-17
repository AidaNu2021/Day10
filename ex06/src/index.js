var lion = {
    "name": "Simba",
    "legs": 4,
    "tails": 1,
};
function myFunction(roar) {
    console.log(roar);
}
function addProperty(propName, propValue) {
    lion["roar"] = "roar-roar";
    return lion;
}
    console.log(addProperty("roar", "roar-roar"));

myFunction(lion);
module.exports = myFunction;

