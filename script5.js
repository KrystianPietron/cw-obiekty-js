const myOwnNew(constructorFn, argsArray) =>{
    conts newInstance = Object.create(constructorFn.prototype)
    constructorFn.apply(constructorFn, argsArray)
    return newInstance
}



function Dog(name) {
    this.name = name;
    this.sound = "Woof";
  }

  Dog.prototype.makeSound = function() {
    console.log(this.sound);
  };




  dog1.makeSound();