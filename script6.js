function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("hi Im " + this.name);
};
const me = new Person("Krystian");

me.sayHello("Krystaian");
