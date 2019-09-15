var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

  var penguins = [gunter , ramon , fred];

var foods =["pizza","burger","pasta","takos"];
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
        firstFavFood : favouriteFoods[1],
        lastFavFood : favouriteFoods[favouriteFoods.length - 1],
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
  console.log(penguins[0]);
  var secondPenguin = penguins[1];
  console.log(penguins[2]);
  penguins.push(myPenguin);
  console.log(penguins.length);
  gunter.canFly = true;
  gunter.sayHello();
  for (let penguin in penguins){
      console.log (penguins[penguin]);
  }
  for (var penguin in penguins){
      console.log(penguins[penguin].sayHello());
  }
  for (var penguin in penguins){
      console.log(penguins[penguin].noOfFeet = 2);
  }
  for (var penguin in penguins){
      if (penguins[penguin].canFly === true) {
          console.log(`penguin ${penguins[penguin].name} can Fly`);
      }
  }
  