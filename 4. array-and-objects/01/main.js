
var foods =["pizza","burger","pasta","takos"];
var myPenguin = {
        name : "Patrick",
        canFly : false,
        sayHello : function sayHello(){
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
console.log(myPenguin["favouriteFoods"][1]);
 myPenguin["favouriteFoods"].push("takos");
console.log(myPenguin["favouriteFoods"].length);

for (i = 0; i<(myPenguin["favouriteFoods"].length);i++){
    console.log(myPenguin["favouriteFoods"][i]);
    }


