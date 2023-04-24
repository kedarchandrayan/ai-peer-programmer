const greet = function(k) {
  if(k === undefined) {
    return new Promise((resolve, reject) => {reject("Whoops!");});
  }

  return new Promise((resolve, reject) => {resolve("Hello!");});
};

const greetWorld = function() {
  greet().then((result) => {
    console.log(result, 'World!');
  }).catch((error) => {
    console.log(error);
  });
};

// Refactor the above code to use async/await instead of .then() and .catch()
const greetWorldAsync = async function() {
  try {
    const result = await greet();
    console.log(result, 'World!');
  } catch(error) {
    console.log(error);
  }
};
