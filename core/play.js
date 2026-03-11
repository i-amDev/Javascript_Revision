var name = 'JavaScript';

let age = 25;

let hasHobbies = false;

console.log('Hello JavaScript!');
console.log(name);
console.log(age);
console.log(hasHobbies);

function summarizeUser(userName, userAge, userHobby) {
    return "Name is " + userName + " Age is " + userAge + " and the user has hobbies " + userHobby;
}

console.log(summarizeUser("Tony", 50, false));

const summarizeUserInConstant = function(userName, userAge, userHobby) {
    return "Name is " + userName + " Age is " + userAge + " and the user has hobbies " + userHobby;
}

console.log(summarizeUserInConstant("Steve", 80, true));

const arrowFunction = (userName, userAge, userHobby) => {
    return "Name is " + userName + " Age is " + userAge + " and the user has hobbies " + userHobby;
}

console.log(arrowFunction("Bruce", 45, true));

// Object in JS

const person = {
    name : "Tony",
    age : 55,
    // greet() {
    //     console.log("Hello, My name is " + this.name);
    // }
    greet : function () {
        console.log("Hello, My name is " + this.name);
    }
};

person.greet();

// Arrays in JS

let hobbies = ['Coding', 'Cricket', 'Gaming'];
// for of loop
for (let temp of hobbies) {
    console.log(temp);
}
// map function always return new array
console.log(hobbies.map(hobby => "Hobby : " + hobby));
console.log(hobbies);

// slice operator
const copiedArray = hobbies.slice();
console.log(copiedArray);

// spread operator
const spreadOperator = [...hobbies];
console.log(spreadOperator);