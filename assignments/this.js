/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - "this" is automatically set to the window or console.
* 2. Implicit Binding - "this" is provided implicitly by a preceding ".", then followed by a predefined method.
* 3. New binding - "this" 
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

function myName(name){
    console.log(this);
    return name;
}
myName("Saipher");

// Principle 2

const zureti = {
    name: "Zureti"
    say: function(){ console.log(`My last name is ${this.name}.`)}
}

zureti.say();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding