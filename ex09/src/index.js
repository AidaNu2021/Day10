function myFunction(myObj, checkProp) {

var myObj = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "drama"
};
myObj.hasOwnProperty("title");
myObj.hasOwnProperty("song");
myObj.hasOwnProperty("genre");
myObj.hasOwnProperty("actor");

}
module.exports = myFunction;