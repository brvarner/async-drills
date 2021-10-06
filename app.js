// const stringer = (message) => {console.log(message)};

// // Testing stringer function
// stringer('Hello World!');

// // Testing stringer function after an interval
// setTimeout(() => {stringer('Ello Guvnah!')}, 2000);

// // Creating function that logs one word instantly,
// // then more words after predetermined intervals
// const getWords = (...words) => {
//     console.log(`${words[0]}`);
//     setTimeout(() => {console.log(`${words[1]}`)}, 3000);
//     setTimeout(() => {console.log(`${words[2]}`)}, 5000);
//     setTimeout(() => {console.log(`${words[3]}`)}, 7000);
// }

// Callbacks and Recursion

// // Creating Done Function
// const done = () => {console.log(`Job's done!`)};

// // Creating countdown function
// const countdown = (num, callback) => {
//     console.log(num);

//     setTimeout(() => {if (num > 0){
//     countdown(num - 1, callback)
//     } else {
//     callback()
//     }
//     }, 1000)
// }

// // Calling Countdown Function
// countdown(5, done)

// Creating a global variable with a value of true
let lunchTime = true;

// Creating a function that returns a promise
orderMeSomeFood = () => {
    // Creating New Promise
  return new Promise((resolve, reject) => {
    //   Using if statements to set resolve/reject states.
    if (lunchTime === true) {
      let meal = {
        lunch: "Impossible Whopper",
        drink: "sparkling water",
      };
      resolve(meal);
    }

    if (lunchTime === false) {
      let notLunch = new Error(`It ain't lunchtime bucko!`);
      reject(notLunch);
    }
  });
};

// Calling function with .then() and .catch() methods
orderMeSomeFood()
  .then((a) => console.log(a))
  .catch((e) => console.log(e));
