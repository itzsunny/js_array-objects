var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
    favouriteFoods: foods,
    firstFavFood : favouriteFoods[1],
    lastFavFood : favouriteFoods[favouriteFoods.length - 1],
    outFit :outfit ,
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
    favouriteFoods: foods,
    firstFavFood : favouriteFoods[1],
    lastFavFood : favouriteFoods[favouriteFoods.length - 1],
    outFit :outfit ,
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
    favouriteFoods: foods,
    firstFavFood : foods[1],
    lastFavFood : foods[foods.length - 1],
    outFit :outfit ,
  };

var myPenguin = {
        name : "Patrick",
        canFly : false,
        sayHello : function (){
            return (`Hello, I'm a penguin and my name is ${myPenguin.penguin.name}!`);
            },
        chirp : function chrip(){
           return  "CHIRP CHIRP! Is this what penguins sound like?";
             },
        fly : function fly(){
            if (canFly == true) {
                consloe.log("I can fly!");
            } else {
                console.log("No flying for me!");
            }
        } ,
        favouriteFoods: foods,
        firstFavFood : foods[1],
        lastFavFood : foods[foods.length - 1],
        outFit :outfit ,

    1 : { "Literature": 
            {
                1.1 : "comics"
            }
        },
    2 : "Theatre",
    3 : {"in media":
            { 
                3.1 : "Animations",
                3.2 : "video games",
                3.3 : " Other media (toys, mascots, logos, etc.)"
            }  
        },
    4 : "See also",
    5 : "References",
};
var outfit = {
    hat : "baseball cap",
    shirt : "Hawaiian shirt",
    pants : "cargo shorts",
    shoes : "flip-flops"
}
for (var penguin in penguins) {
    penguin["outFit"] = outfit;
}
var penguins = [gunter , ramon , fred, myPenguin];
var foods =["pizza","burger","pasta","takos"];
for (var penguin in penguins){
    penguinHatType = penguin["outFit"].hat;
}
for (var penguin in penguins) {
    penguin["outFit"].accessory = "pocket watch";
}
for (var penguin in  penguins) {
    penguin["outfit"].hat = "top hat";
}
for (var penguin in penguins) {
    delete penguin["outFit"].pants;
}
for (var penguin in penguins) {
    console.log(`${penguins[penguin].outFit}`);
}





  
 
  