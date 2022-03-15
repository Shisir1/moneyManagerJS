const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const accountOne = {
  owner: 'Gorakh Raj Joshi',
  movements: [200,-300, 400,500,-700,1300,-1100,1600
  //   function add(){
  //   return 'Hello World!';
  // }
],
  interestRate: 1.5,
  pin: 1234,
};

const accountTwo = {
  owner: 'Shisir Humagain',
  movements: [1000,-600,700,-300,1300,-1100,1600],
  interestRate: 1.1,
  pin: 2222,
};

const accountThree = {
  owner: 'Bishal Sharma',
  movements: [1000,-600,700,-300,1300,-1100,1600],
  interestRate: 1.1,
  pin: 2234,
}

const accounts = [accountOne,accountTwo,accountThree];

const arr = [1,2,3,4,5];

const ownerLower = accountOne.owner.toLocaleLowerCase();
//split() will devide an string using given argument in it and place it in an Array 
const splitOwner = ownerLower.split(' ');

// console.log(splitOwner);

//Arrow function
console.log(splitOwner.map((name) => name)); // returns each elements of splitOwner and place it inside an Array

const letterElements = splitOwner.map((name) => name[0]); //returns first letter of each element of that array

console.log(letterElements.join('-')); //returns a string as an Array separateted by '-'.

//username of accountOne in shortform
const username = accountOne.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
console.log(username);

//username of accountTwo in shortform
const username2 = accountTwo.owner.toLowerCase().split(' ').map((name) => name[0]).join('');

//username of both accounts in shortform
accountOne.username = accounts[0].owner.toLowerCase().split(' ').map((name) => name[0]).join('');
console.log(accountOne);

//dynamically insert username inside all acoo
const createUsername = (accounts) =>{
  accounts.forEach((account) => {
    account.username = account.owner
    .toLowerCase()
    .split(' ')
    .map((name) => name[0])
    .join('');
  });
};



console.log(accountOne);
console.log(accountTwo);
console.log(accountThree);

// accountOne.username = 'Shisir Humagain';






console.log(
  arr.map(function(element){
    return element *2; //returns each elements of arr array and place it in an array multiply with 2
  })
);

arr.forEach(function(element){
  console.log(element*2);
});

console.log(
  arr.map(function(element,b,Array){
    return (element *2),b,Array;
  })
);





// console.log(accounts);

const [{movements}] = accounts;
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



const displayMovements = (movements) =>{
  movements.forEach(function(mov,i){
    // if(mov < 0) {
    //   console.log('Withdrawal');
    // }else {
    //   console.log('Deposit');
    // }
    // console.log(mov > 0 ? 'Deposite':'Withdrawal');
    const type = mov > 0 ? 'deposit':'withdrawal';
    console.log(type);
  
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
    </div>
    <div class="movements__value">${mov}€</div>
  </div>`;
  containerMovements.insertAdjacentHTML('afterbegin',html);
  });
};


//reduce method : same as map but it reduces to only first element of the array
//2nd argument is the initial value 

//Total Balance Display

const displayBalance = (movements) =>{
  labelBalance.textContent = `$${movements.reduce((accumulator,movement) => accumulator + movement,0)}`;
}

//calling 3 functions we created
createUsername(accounts);
displayMovements(movements);
displayBalance(movements);







