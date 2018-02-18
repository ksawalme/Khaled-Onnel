
// function welcomeMentors() {
//     console.log("Hello Mozafar");
//     console.log("Hello Rares");
//     console.log("Hello Tim");
//     console.log("Hello Ashleigh");
//     console.log("Hello Gordon");
// Exercise: write an improved version of this function

// function printHelloFiveTimes() {
// var hi = "Hello"
// for (var x = 0; x<5; x++)
// console.log(hi)

// }
// printHelloFiveTimes()

////////////////////////////////////////

// function welcomeMentors["lorenzo", ]  {
//   console.log("Hello Mozafar");
//   console.log("Hello Rares");
//   console.log("Hello Tim");
//   console.log("Hello Ashleigh");
//   console.log("Hello Gordon");
// }

// 
// function welcomeMentors() {
//   var mentorNames = ['Mozafar', 'Rares', 'Tim', 'Ashleigh', 'Gordon']
//   mentorNames.forEach((mentor) =>{
// console.log("Hello " + mentor)
// })
// }
// welcomeMentors()

// function welcomeMentors() {
//   let arr = ['a', 'b', 'c', 'd']
// arr.forEach((letter) => {
//     console.log("helo " + letter)
// })
// }


// welcomeMentors()

function Mynetincome(salary, taxCode, incomeTax1, incomeTax2, ownsCar) {

  // the name of function and all paramitres 
  var totalIncomeTax = incomeTax1 + incomeTax2;
  var studentLoan = (salary - 17775) * 0.09;
  var originalSalary = salary;
  // here i delete one varibal its not used in any where 
// here is defination for the total of salary and total of taxCode
  if (taxCode === "1150L") {
    nationalInsurance = salary * 0.1;
  }
      else if (taxCode === "ST") {
    nationalInsurance = salary * 0.05;
  } 
     else {
    nationalInsurance = salary * 0.08;
  }
  // here is the function give us if we but the parameters in a bloian
  var deductions = [nationalInsurance, totalIncomeTax, studentLoan];
  var X =  deductions
  for ( x=0; x<deductions.length; x++)
  salary = salary - deductions[x]
// The line where a deduction is taken from the salary is repeated 3 times with different indices.
// This can be replaced with a for loop.

  return (
    "Your gross income is £" +
    originalSalary.toString() +
    " and your net income is £" +
    salary.toString() +
    "."
    //here is what is the result
  );
}

console.log(Mynetincome(28000, "1150L", 1000, 580, false));