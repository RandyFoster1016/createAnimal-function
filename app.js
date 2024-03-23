//Same keys and values
function createInstructor(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName
    }
}
//Same keys and values ES2015
function createInstructor(firstNmae, lastName) {
    return {
        firstName,
        lastName
    }
}
//Computed Property Names
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}
instructor[favoriteNumber] = "This is my favorite!"

//Computed Property Names ES2015
let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "This is my favorite"
}

//Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName  + "says bye!";
    }
  }

  //Object Methods ES2015
const instructor ={
    firstName:"Colt",
    saysHi() {
        return "Hi!";
    },
    saysBye(){
        return this.firstNmae +"says bye!";
    }
}

//createAnimal function
const d = createAnimal("dog", "bark", "woooff!")
//(species:"dog", bark: f)
d.bark() //"Wooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
//(species:"sheep", bleet: f)
s.bleet()//"BAAAAaaaa"

function createAnimal(species, verb,noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}