// Using the different way of accessing and assigning a value to the object using `.` or `[]`
var obj = {
    name:"sunny",
    age:21,
    qualification:"B.tech"
}
console.log(obj.name);
console.log(obj["age"]);
// 1. Define a variable named `user` and assign a blank object to it.
var user = {};

// 2. Add a key of `user name` and a value of `Black Panther` to that object.
var user = {
    userName:"Black Panther",
    10:batch,
    42:`The answer to the meaning of life 🧸`
}

// 3. Using `console.log` log the value of `user name` key from the user object.
console.log(user.userName);
// 4. Add a key of the value of variable `batch` in the object with the value of 10.
var batch = "myBatch";
var user = {
    userName:"Black Panther",
    10:batch,
    42:`The answer to the meaning of life 🧸`
}

// 5. Using the alert function alert the value of the key added above.
alert(user[10]);

// 6. Add a key of `42` to the object with a value of `The answer to the meaning of life 🧸`.
var batch = "myBatch";
var user = {
    userName:"Black Panther",
    10:batch,
    42:`The answer to the meaning of life 🧸`
}
// 7. Using the function console.log log the value of the key `42`.
console.log(user[42]);
// 8. Add a key in your object with the value of the variable `city`. The value of the key should be `true`.
var city = prompt("Enter the city name you visited las time.");
var batch = "myBatch";
var user = {
    userName:"Black Panther",
    10:batch,
    42:`The answer to the meaning of life 🧸`,
    true:city,
    let :"you",
    var :"me"
}

// 9. Uisng console.log log the value of the key defined above.
console.log(user[true])
// 10. Can you define a key of `let or var` in any object? Reason.
yes we can take var or let as key because objects just understand key value pairs. but it will target all var inside the obj.