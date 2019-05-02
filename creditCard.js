


//Class to create new credit card account with unique properties

class Account {
	constructor(name){
		this.name = name
		this.date = Date()
		//apr
	}
	creditLimit(amount){
		this.creditLimit = amount
	}
}


//instantiate new Account
let andrewAccount = new Account('Andrew')


//user input credit limit
andrewAccount.creditLimit(5000)

console.log(andrewAccount)

