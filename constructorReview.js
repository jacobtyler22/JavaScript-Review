//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = new function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender){
  var ob = {};
  this.name = name;
  this.age = age;
  this.height = height;
  this.gender = gender;
  return ob;
}


//Create a animal array and a person array.

var animal = [];
var person = [];


//Create two instances of Animal and push those into your animal array

var dog = new Animal('Kainine', 'Fido', '4', 'White', ['Meat', 'Trash', 'Poop']);
var hippopotamus = new Animal('Hippo', 'Barney', '4', 'Purple', ['People', 'Houses', 'Birds', 'Other Hippos']);

//Create two instances of person and push those into your person array.

var jacob = person('Jacob', 19, 74, 'Male');
var zane = person('Zane', 16, 70, 'Male');

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat(thing){
  alert(this.name' ate 'thing)
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  //no, we cannot call prototype on person since we didn't use the keyword. we would have to add it to every one individually


/*
  1) What happens when you use the 'new' keyword to call a Constructor function? //automatically puts top and bottom lines in
  2) What's a good way to describe the keyword 'this' //referring to things inside the function the this is in
  3) Can a normal function which creates an object and then returns that object use the prototype? //no
  4) What happens if you forget to use 'new' when calling a constructor? //it will hoist up to the top
*/