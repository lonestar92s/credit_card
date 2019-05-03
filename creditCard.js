//purchase timestamp function

const timestamp = ()=> { 
	new Date().valueOf();
}


//Constructor to create new credit card account with unique properties and methods

class Account {
	constructor(name, apr, limit){
		this.name = name;
		this.apr = apr
		this.creditLimit = limit
		//Account age by days
		this.accountAge = 0;
		this.balance = 0;
		this.purchases = [];
		this.payments = []
		this.time = []
	}
	
	purchase(amount, dayOfMonth, item, merchant){
		if(this.creditLimit > 0){
		console.log("Welcome, " + this.name + '! Your credit limit is $' + Number(this.creditLimit).toLocaleString() + ' dollars, with an APR of ' +this.apr + '%.')
		this.balance += amount;
		//this.time.push(new Date().toString())
		
		//keeps track of individual customers items purchased
		this.purchases.push('$'+ amount, item, merchant)
		//refactor to clean up?
		console.log('You purchased ' + item + ' from ' + merchant + ' for $' + amount + ' dollars.')
		console.log('Your avalaible credit is $' + Number((this.creditLimit - amount)).toLocaleString() + '.')
		}
		else(console.error("Hi " + this.name + ", this account is currently not active."))
	}
	payment(amount, dayOfMonth){
		if(amount > 0){
		this.balance -= amount
		this.payments.push('$' + amount)
		console.log("Hi " + this.name + ", you have made a payment of $" + amount + " dollars. Your available credit is now $" + Number((this.creditLimit - this.balance + amount)).toLocaleString() + '.')
		 }
		 else(console.error("Payment must be more than 0 dollars"))
	}
	checkBalance(){
		console.log("Your account balance is $" + this.balance + ".")
	}
	accountDays(days){

	}
}
			 


//logic for APR


//Open new account with name, APR% and credit limit
let andrewAccount = new Account('Andrew', 35, 10000)

andrewAccount.purchase(500, 'Samsung TV', 1, 'Best Buy')
andrewAccount.checkBalance()







		






