function canDrink(person) {
  if(person?.age != null) {
    if(person.age < 18) {
      console.log("Still too young")
    } else if(person.age < 21) {
      console.log("Not in the US")
    } else {
      console.log("Allowed to drink")
    }
  } else {
    console.log("You're not a person")
  }
}

const person = {
  age: 22
};

canDrink(person);

// Rewrite the code in a more readable and maintainable way
function canDrink1(person) {
  if(!person?.age) {
    console.log("You're not a person")
    return;
  }

  if(person.age < 18) {
    console.log("Still too young")
  } else if(person.age < 21) {
    console.log("Not in the US")
  } else {
    console.log("Allowed to drink")
  }
}
