#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "inquirer";

// printing a Wellcome Massege
console.log("\n\twellcome to \ 'codeWithvandana\' - simple-calculator");

// Asking Questions from users through inquirer


const answer = await inquirer.prompt([
{ message: "Enter first number", type: "number", name: "firstNumber" },
{ message: "Enter second number", type: "number", name: "secondNumber" },
{
  message: "Select one of the operators to perform operator",
  type: "list",
  name: "operator",
  choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Modulus", "Unary",],
},          
]);

// conditional statement
  if (answer.operator === "Addition") {
      console.log(answer.firstNumber + answer.secondNumber);  
} else if (answer.operator === "Subtraction") {
      console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
      console.log(answer.firstNumber * answer.secondNumber);     
}
 else if (answer.operator === "Division") {
      console.log(answer.firstNumber / answer.secondNumber);
 }
 else if (answer.operator === "Exponentiation") {
      console.log(answer.firstNumber ** answer.secondNumber);     
}
else if (answer.operator === "Modulus") {
      console.log(answer.firstNumber % answer.secondNumber);     
}
else if (answer.operator === "Unary") {
      console.log(answer.firstNumber ++ - - answer.secondNumber);     
}
 else {
      console.log("please select valid operator") 
 }