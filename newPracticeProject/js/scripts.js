function person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.birthMonth = null,
    this.favoriteFood = ["Hawaiian", "Chinese", "Mexican", "Greek"],
    this.age = null
};

function cubsPlayer() { // our instance of person, cubsPlayer
    this.firstName = "Kris",
    this.lastName = "Bryant",
    this.birthMonth = 4,
    this.favoriteFood = ["Brazilian", "Chipotle", "Vietnamese"],
    this.age = 8
};

//Instance Creation from person constructor
window.cubsPlayer = new person("Kris", "Bryant");
window.cubsPlayer.age = 27;
// works
console.log("Kris instance :: ");
console.log(window.cubsPlayer);

// Our function for adding data directly to the page
function addData() {
    this.firstName = document.querySelector(".firstName");
    this.lastName = document.querySelector(".lastName");
    this.birthMonth = document.querySelector(".birthMonth");
    this.age = document.querySelector(".age");
    this.favoriteFood = document.querySelector(".favoriteFood");
    this.rObject = window.cubsPlayer; //grabs all the data from the global cubsplayer1 function and places it inside rObjectOne

    firstName.innerHTML = rObject.firstName;
    console.log("My firstname is " + " " + rObject.firstName);
    lastName.innerHTML = rObject.lastName;
    birthMonth.innerHTML = rObject.birthMonth;
    age.innerHTML = rObject.age != null ? rObject.age : 37;
    favoriteFood.innerHTML = rObject.favoriteFood;
    
    console.log(rObject.favoriteFood.length);

    return false;
};

// Fire add data function
addData();
