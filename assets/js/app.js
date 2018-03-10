"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let express = require("express");
let app = express();
let sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
};
function iterateWord(word, num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str += word + " ";
    }
    return str;
}
//-----------GET Routes-------------------
app.get("/", function (request, response) {
    response.send("Hi there, welcome to my assignment!");
});
app.get("/speak/:animal", function (request, response) {
    let animal = request.params.animal;
    let animalSays = sounds[animal];
    let prompt = "The " + animal + " says '" + animalSays + "'";
    response.send(prompt);
});
app.get("/repeat/:word/:iterations", function (request, response) {
    let word = request.params.word;
    let num = Number(request.params.iterations);
    let prompt = iterateWord(word, num);
    response.send(prompt);
});
app.get("*", function (request, response) {
    response.send("Sorry, page not found");
});
//-----------LISTEN-----------------------
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
