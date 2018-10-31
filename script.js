const growJSskill = function() {
  this.JSskill = this.JSskill + 1;
};
//  Funkcje pierwsze
// ---------------------------------------------------------------------------------------
// const me = {
//     name: Krystaian,
//     JSskill: 1,
//     growJSskill: growJSskill,
// }

// const brother ={
//     name: Krystaian,
//     JSskill: 1,
//     growJSskill: growJSskill,
// }

// my.growJSskill();
// brother.growJSskill();
// --------------------------------------------------------------------------------------------

// Funkcje drugie
// --------------------------JA---------------------------------------------------------------
// const addBrother = [];
// const makePerson = function(name, initialSkill, x) {
//   for (let i = 1; i <= x; i++) {
//     addBrother[i] = {
//       name: `${name}${i}`,
//       JSskill: initialSkill,
//       growJSskill: growJSskill
//     };
//   }
//   return addBrother;
// };
// console.log(makePerson("Krystian", 1, 50));

// --------------------------------------------------------------------------------------------
// ----------------------Mateusz Choma cwiczenie-----------------------------------------------

// const addPerson = function(name, initialSkill) {
//   return {
//     name: name,
//     JSskill: initialSkill,
//     growJSskill: growJSskill
//   };
// };
// const brothers = [];

// for (let i = 1; i <= x; i++) {
//   brothers[i] = addPerson(i, 0);
// }

// ---------------------------------------------------------------------------------------------
// ---------------------Mateusz Choma metoda----------------------------------------------------
const addPersons = function(name, initialSkill) {
  return {
    name: name,
    JSskill: initialSkill,
    growJSskill: growJSskill,
  };
};
const brothers = Array(100).fill(0).map((e,i)=>addPersons(i, 0));
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
