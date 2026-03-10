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