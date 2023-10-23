//

let myName = "Sameer      ";



// console.log(myName.truelength); // i want to crate a mhethod to show truw length

const Myhero = ["thor", "ironman"];

const heroPower = {
  thor: "Thunder",
  ironMan: "Technology",

  getAllHeroPower: function () {
    console.log(`iron man power is: ${this.ironMan}`);
  },
};

Object.prototype.samer = function(){
    console.log("here im ");
}

Array.prototype.hello= function(){
  console.log("helooooooooooooo");
}

// heroPower.hello()
// Myhero.hello()






// inheritance *************
const user ={
  username: "sameer"
}
const Teacher = {
  mkvideo: "true"
}

const TeacherSport = {
  isAvailable: 'false'
}


const TASport = {
  fulltime: 'ture',
  __proto__: TeacherSport
}

Teacher.__proto__ = user //outdated approche

// Modern syntax+++++++++++++++++

Object.setPrototypeOf(Teacher, user)



let newName = "sameer     "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

newName.trueLength()
"khan shab             ".trueLength()