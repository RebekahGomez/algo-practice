/*
 * Prompt:
 *
 * Create a variable called age and assign it to your age (or a number). Write
 * a conditional that matches the following conditions:
 *
 *   - if age is less than or equal 19, print "You're still a teenager!"
 */

let age = 20;

function teenager() {
  if (age <= 19 && age >= 13) {
    console.log("You're still a teenager");
  } else if (age <= 12) {
    console.log("You're not a teenager yet.");
  } else {
    console.log("You're not a teenager anymore!");
  }
}

// teenager();

/*
 * Prompt:
 *
 * Create a variable called favoriteNumber and assign your favorite number to
 * it. Write a conditional that matches the following conditions:
 *
 *   - if favoriteNumber is less than 10, print "A little number!" to the
 *   console
 *   - otherwise, print "Not a little number!" to the console
 */

let favoriteNumber = 47;

function number() {
  if (favoriteNumber < 10) {
    console.log("A little number");
  } else {
    console.log("Not a little number");
  }
}

// number();

/*
 * Prompt:
 *
 * Create a variable called a and assign it a number. Write a conditional that
 * matches the following conditions:
 *   - if (a * 3) % 2 is equal to 0, print "After running our calculations, the
 *   result is even"
 *   - otherwise, print "After running our calculations, the result is odd"
 */

let a = 14;

function oddOrEven() {
  if ((a * 3) % 2 === 0) {
    console.log("This number is even");
  } else {
    console.log("This number is odd");
  }
}

// oddOrEven();

/*
 * Prompt:
 *
 * Create a variable called b and assign it a random number between 0 and 100.
 * Write a conditional that matches the following conditions:
 *
 *   - if b is less than 25, print "bottom quartile"
 *   - if b is between 25 and 50, print "lower quartile"
 *   - if b is between 50 and 75, print "upper quartile"
 *   - if b is between 75 and 100, print "top quartile"
 */

let b = 100;

function quartile() {
  if (b < 25) {
    console.log("bottom quartile");
  } else if (b >= 25 && b < 50) {
    console.log("lower quartile");
  } else if (b >= 50 && b < 75) {
    console.log("upper quartile");
  } else {
    console.log("top quartile");
  }
}

quartile();
