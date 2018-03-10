import {Application, Request, Response} from 'express';
let express:any = require("express");
let app:Application = express();

interface ISomeSounds{
  pig: string;
  cow: string;
  dog: string;
  [key: string]: string;
}

let sounds:ISomeSounds = {
  pig: "Oink",
  cow: "Moo",
  dog: "Woof Woof!"
}

function iterateWord(word:string, num:number):string{
  let str:string = "";
  for(let i:number = 0; i < num; i++){
    str += word + " ";
  }
  return str;
}

//-----------GET Routes-------------------
app.get("/", function(request:Request, response:Response):void{    
  response.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(request:Request, response:Response):void{
  let animal:string = request.params.animal;
  let animalSays:string = sounds[animal];
  let prompt:string = "The " + animal + " says '" + animalSays + "'";
  response.send(prompt);
});

app.get("/repeat/:word/:iterations", function(request:Request, response:Response):void{
  let word:string = request.params.word;
  let num:number = Number(request.params.iterations);
  let prompt:string = iterateWord(word, num);  
  response.send(prompt);
});

app.get("*", function(request:Request, response:Response):void{
  response.send("Sorry, page not found");
});


//-----------LISTEN-----------------------
app.listen(3000, function():void{
  console.log("Listening on port 3000");
});