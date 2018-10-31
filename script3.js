const makeSound = function(name, lastname) {
  console.log(this.sound + " " + name + " " + lastname);
};

const cat = {
  name: "Fluffy",
  sound: "Moeeeew",
  makeSound: makeSound
};
makeSound("Krystian", "Pietroń");

const bindedToCatMakeSound = makeSound.bind(cat);

bindedToCatMakeSound("Krystian", "Pietroń");

makeSound("Krystian", "Pietroń");


// object.asain        object.create

