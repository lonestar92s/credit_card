//purchase timestamp function

const timestamp = ()=> { 
	new Date().valueOf();
}


//Constructor to create new credit card account with unique properties and methods

class Account {
	constructor(name){
		this.name = name
		this.accountAge = 0
		this.balance = 0
		this.items = []
		//apr
	}
	creditLimit(limit){
		this.creditLimit = limit
	}
	purchase(amount, item, merchant){
		if(this.creditLimit > 0){
		console.log("Welcome, " + this.name + '! Your credit limit is ' + this.creditLimit + ' dollars.')
		
		this.balance += amount;
		//keeps track of individual customers items purchased 
		this.items.push(amount, item, merchant)
		//refactor to clean up?
		console.log('You purchased ' + item + ' from ' + merchant + ' for ' + amount + ' dollars.')
		console.log('Your balance is ' + this.balance + ' dollars')
		}
		else(console.error("Hi " + this.name + ", this account is currently not active."))
	}
	payment(amount){
		this.balance -= amount
	}
	//timer function for practicality 
	//1 minute equals 1 day
	timer(){
		

	} 
}
			 


//logic for APR


//Create new Account
let andrewAccount = new Account('Andrew')
let christyAccount = new Account('Christy')
let mackAccount = new Account('Mack')


//user input credit limit
// andrewAccount.creditLimit(1000)
// andrewAccount.purchase(10, 'cookies', 'HEB')

// christyAccount.creditLimit(500)
// christyAccount.purchase(98, 'tread shoes', 'everlane')

mackAccount.creditLimit(1000)
mackAccount.purchase(30, 'food', 'blue buffalo')
console.log(christyAccount.items)






