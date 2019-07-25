/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  window binding - the default object the 'this' keyword points too when there are no other rules.

* 2.  Implicit binding - the function is automatically applied to the object it's nested in

* 3. new binding - uses a new keyword to construct a new object. this is used to point to it.

* 4. explicit binding - using call, apply or bind 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);


// Principle 2

// code example for Implicit Binding

const hi ={
    name:"bob",
    tellMe: function(){
        return `My name is ${this.name}`
    }
}

console.log(hi.tellMe());

// Principle 3

// code example for New Binding


function Taco(filling){
    this.alPastor = filling;
}

let dinner = new Taco('pork');

console.log(dinner.alPastor);

// Principle 4

// code example for Explicit Binding


function dog(){
   return this.sound;
}

const myDog ={
  name: "Snoop",
  sound:"Bow wow wow",
}

console.log(dog.call(myDog)); 