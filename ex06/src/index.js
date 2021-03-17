
var lion = {
    "name": "Simba",
    "legs": 4,
    "tails": 1,
};

function myFunction(lion, roar) {
    lion ["roar"] = "roar-roar";
    return lion;
    console.log(myFunction("roar", "roar-roar"));
}
myFunction(lion);
module.exports = myFunction;

