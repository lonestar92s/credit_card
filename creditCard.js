//purchase timestamp function

const timestamp = ()=> { 
	new Date().valueOf();
}

//Class to create new credit card account with unique properties and methods

class Account {
	constructor(name){
		this.name = name
		this.accountAge = 0
		this.balance = 0
		//apr
	}
	creditLimit(limit){
		if(limit <= 0){
			console.log("This account is not active")
		}	
		else
			this.creditLimit = limit
	}
	purchase(amount, item, merchant){
		console.log("Welcome, " + this.name + '! Your credit limit is ' + this.creditLimit + ' dollars.')
		this.balance += amount;
		//refactor to clean up?
		console.log('You purchased ' + item + ' from ' + merchant + ' for ' + amount + ' dollars.')
		console.log('Your balance is ' + this.balance + ' dollars')
	}
	payment(amount){
		this.balance -= amount
	} 
}
			 


//logic for APR


//Create new Account
let andrewAccount = new Account('Andrew')
let christyAccount = new Account('Christy')


//user input credit limit
andrewAccount.creditLimit(5)
andrewAccount.purchase(10, 'cookies', 'HEB')

christyAccount.creditLimit(500)






