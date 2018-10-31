const makeSound = function(name, lastname) {
  console.log(this.sound + " " + name + " " + lastname);
};

const cat = {
  name: "Fluffy",
  sound: "Moeeeew",
  makeSound: makeSound
};

makeSound.apply(cat,['Krystian', 'Pietroń']);
makeSound.apply({sound: 'Wooof'},['Krystian', 'Pietroń'])
makeSound.call(cat, 'Krystian', 'Pietroń');
makeSound.call({sound: 'Wooof'}, 'Krystian', 'Pietroń')

