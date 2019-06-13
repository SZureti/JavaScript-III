/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - "this" is automatically set to the window or console.
* 2. Implicit Binding - "this" is provided implicitly by a preceding ".", then followed by a predefined method.
* 3. New binding - "this" is provided by a constructor function using the keyword "new".
* 4. Explicit binding - "this" is provided explicitly by means of a built-in ".call" and/or "apply" method.
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name){
    console.log(this);
    return name;
}
sayName('Saipher');

// Principle 2

const zureti = {
    name: "Zureti",
    say: function(){ console.log(`My last name is ${this.name}.`)}
}

zureti.say();

// Principle 3

//Tried to create this function. It worked at first until I made a mistake and tried to fix it but wasn't able to. I'll revisit later.
// function Friend(person){
//     this.name = person.name;
//     this.introduction = person.introduction;
//     this.speak = function(){
//         console.log(this.introduction + this.person);
//         console.log(this);

//         let inati = new Friend({
//             name: "Umi",
//             introduction: "Nice to meet you,"
//         });
        
//         let umi = new Friend({
//             name: "Inati",
//             introduction: "Nice to meet you,"
//         });
//     }
// }
    // this.name = person.name;
    // this.introduction = "Nice to meet you.";}


//  inati = new friend('Umi');
//  umi = new friend('Inati');

// inati.speak();
// umi.speak();

//this one worked though, just trying to mke sure I understand it throughly.
function Person(att){
    this.name = att.name;
    this.age = att.age;
    
    //I wanted to add a speak function here but I couldn't get it right and didn't want to waste anymore time on it
    // this.speak = function(){
    //     console.log(`My name is ${this.name} and I'm ${this.ago} years old.`);
    // }
    
}
    let robert = new Person({
        name: "Robert",
        age: 48,
        // speak: console.log(`Hello, my name is ${att.name} and I'm ${att.age} years old`)
    });
    
console.log(robert.name, robert.age);
// console.log(robert.speak);

// Principle 4


function Pet(obj){
    Person.call(this, obj);
    this.toy = obj.toy;
}

Pet.prototype.play = function(){
    console.log(`${this.name} plays with his ${this.toy}.`);
};

let brody = new Pet({
    name: "Brody",
    age: 36,
    toy: "bone"
});

brody.play();