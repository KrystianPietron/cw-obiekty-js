function Dog(name) {
  this.name = name;
  this.sound = "Woof";
}

Dog.prototype.makeSound = function() {
  console.log(this.sound);
};

const dog0 = Dog();
const dog1 = new Dog();

dog1.makeSound();

// Object
//     prototype --|
//     __proto__   |
//                 |
//                 |
//                 |   DOG
//                 |    prototype --|
//                 |--  __proto__   |
//                                  |
//                                  |
//                                  |      dog0
//                                  |    prototype --|
//                                  |--  __proto__   |
//                                                   |
//                                                   |
//                                                   |
//                                                   |
//                                                   |      dog1
//                                                   |-- __proto__
//                                                       prototype
