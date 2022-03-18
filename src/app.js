"use strict";
const arr = [1, 2, 3, 4, 5];

const ownerLower = accountOne.owner.toLocaleLowerCase();
//split() will devide an string using given argument in it and place it in an Array
const splitOwner = ownerLower.split(" ");

// console.log(splitOwner);

//Arrow function
// console.log(splitOwner.map((name) => name)); // returns each elements of splitOwner and place it inside an Array

const letterElements = splitOwner.map((name) => name[0]); //returns first letter of each element of that array

// console.log(letterElements.join('-')); //returns a string as an Array separateted by '-'.

//username of accountOne in shortform
const username = accountOne.owner
  .toLowerCase()
  .split(" ")
  .map((name) => name[0])
  .join("");
// console.log(username);

//username of accountTwo in shortform
const username2 = accountTwo.owner
  .toLowerCase()
  .split(" ")
  .map((name) => name[0])
  .join("");

//username of both accounts in shortform
accountOne.username = accounts[0].owner
  .toLowerCase()
  .split(" ")
  .map((name) => name[0])
  .join("");
console.log(accountOne);

//dynamically insert username inside all acoo
const createUsername = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

// console.log(accountOne);
// console.log(accountTwo);
// console.log(accountThree);

// accountOne.username = 'Shisir Humagain';

// console.log(
//   arr.map(function(element){
//     return element *2; //returns each elements of arr array and place it in an array multiply with 2
//   })
// );

// arr.forEach(function(element){
//   console.log(element*2);
// });

// console.log(
//   arr.map(function(element,b,Array){
//     return (element *2),b,Array;
//   })
// );

// console.log(accounts);

const [, { movements, interestRate }] = accounts;
// console.log(movements);

//forEach

//must pass a function as an argument for 'forEach' and it takes 3 parameters, 1st one is actual element, 2nd one is Index and 3rd one is Array itself!
// movements.forEach(function(movement,i,array){
//   console.log(`Index ${i} of value ${movement}`);
// });

// const [,{movements:movementTwo}] = accounts;
// console.log(movementTwo);

// movementTwo.forEach(function(movement,i,array){
//   console.log(movement);
// })

// < 0 => withdrawal
// > 0 => deposit

//creates Username out of Owner name
createUsername(accounts);

let currentAccount;

const updateUI = () => {
  //calling 3 functions we created
  displayMovements(currentAccount.movements);
  displaySummary(currentAccount.movements, currentAccount.interestRate);
  displayBalance(currentAccount.movements);
};

// btnLogin
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  const currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  // '?' is called Optional chaining operator and check the validation or checks 'currentAccount' is truthy or falsy value
  if (currentAccount?.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 1;
    inputLoginUsername.value = inputLoginPin.value = ""; //displays '' after login

    labelWelcome.textContent = `Welcome, ${currentAccount.owner}`;

    updateUI();
  }

  // console.log(inputLoginPin.value);
  // console.log(inputLoginUsername.value);
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  inputTransferTo;
  inputTransferAmount;

  const amount = +inputTransferAmount.value;
  console.log(amount);

  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount.username !== currentAccount.username
  ) {
    receiverAccount.movements.push(amount); // adding transaction
    currentAccount.movements.push(-amount); //withdrawing the money from the senders account
  } else {
    console.log("Please enter amount greater than 0!");
  }

  //updating all values in the UI after transfer
  updateUI();
});
