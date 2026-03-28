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

// Rest operator
const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3));

// De-structuring
const obj = {
    name : "Tony",
    age : 55,
    greet : function () {
        console.log("Hello, My name is " + this.name);
    }
};

const personName = (personData) => {
    console.log(personData.name);
}
personName(obj);

// De-structuring syntax
const printName = ({ name, age }) => {
    console.log("Name is " + name + " and age is " + age);
}
printName(obj);

// Another way
const {name, age} = obj;
console.log(name, age);

// Array de-structuring
const arr = [1, 2, 3, 4, 5];
const [obj1, obj2] = arr;
console.log(obj1, obj2);