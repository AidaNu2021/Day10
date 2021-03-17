function myFunction(roar) {
}

var lion = {
"name": "Simba",
"legs": 4,
"tails": 1,
"roar": "roar-roar"
};

function deleteProperty(propName) {
    delete lion [propName];
    return lion;
}
console.log(deleteProperty("roar"));

myFunction(lion);
module.exports = myFunction;
