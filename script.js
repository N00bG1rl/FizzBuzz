function fizzBuzz() {
  // Get input from user and store it answer variable
  let answer = parseInt(prompt("Please enter the number from 1 to 100 that you would like to FizzBuzz up to: "));
  // Find HTML id element 'message'
  let message = document.getElementById("message");
  // Store output
  let text = "";

  // While entered number is below 1 or higher than 100, prompt again
  while (answer < 1 || answer > 101) {
    answer = parseInt(prompt("Please enter the number from 1 to 100 that you would like to FizzBuzz up to: "));
  }
  // If number is between 1 and 100 continue to loop
  if (answer <= 100 && answer >= 1) {
    // Loop until prompted number
    for (let i=1; i<=answer; i++) {
      // If i is divisible by 3 and 5 print 'Fizz Buzz'
      if (i%3 === 0 && i%5 === 0) {
        console.log("Fizz Buzz");
        text += "Fizz Buzz" + "<br>";
      }
      // If i is divisible by 3 print Fizz
      else if (i%3 === 0) {
        console.log("Fizz");
        text += "Fizz" + "<br>";
      }
      // If i is divisible by 5 print Buzz
      else if (i%5 === 0) {
        console.log("Buzz")
        text += "Buzz" + "<br>";
      }
      // If any previous contiton doesn't match, print i
      else {
        console.log(i);
        text += i + "<br>";
      }
      // Send it to HTML
      message.innerHTML = text;
    }
  }
}
