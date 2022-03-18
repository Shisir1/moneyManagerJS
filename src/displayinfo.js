'use strict';
const displayMovements = (movements) =>{
  movements.forEach(function(mov,i){
    // if(mov < 0) {
    //   console.log('Withdrawal');
    // }else {
    //   console.log('Deposit');
    // }
    // console.log(mov > 0 ? 'Deposite':'Withdrawal');
    const type = mov > 0 ? 'deposit':'withdrawal';
    // console.log(type);
  
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
  const balance = movements.reduce((acc, movement) => acc + movement, 0);
  currentAccount.balance = balance;

  labelBalance.textContent = `$${balance}`;
}

//filter method : same as map method but filter method only returns truthy values when provided compare operation 

// console.log(movements.filter((movements) => movements));

const displaySummary = (movements,rate) =>{

//total deposits
  const depositsSum = movements
.filter((mov) => mov > 0)
.reduce((acc,mov) => acc + mov,0);

labelSumIn.textContent = `$${depositsSum}`;

//total withdrawals
const withdrawalSum = movements
.filter((mov) => mov < 0)
.reduce((acc,mov) => acc + mov,0);


labelSumOut.textContent = `$${withdrawalSum}`;

//total interests
const interest = movements.filter((mov) => mov > 0).map((deposit)=> +(deposit * (rate / 100)).toFixed(2)).reduce((acc,interest)=> acc + interest,0);

labelSumInterest.textContent = `${interest}`;
// console.log(interest);
}