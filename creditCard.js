

//Constructor to create new credit card account with unique properties and methods

class Account {
	constructor(name, apr, limit){
		
		this.name = name;
		this.apr = apr
		this.creditLimit = limit
		//Account age by days
		this.accountAge = 0;
		this.balance = 0;
		this.availableCredit = this.creditLimit
		this.purchases = [];
		this.payments = [];		
		console.log(`Welcome, ${this.name}! Your credit limit is $${Number(this.creditLimit).toLocaleString()} dollars, with an APR of ${this.apr}%.`)

	}
	
	purchase(amount, item, merchant, dayOfMonthPurchased){
		if(this.creditLimit > 0){
		this.balance += amount;
		this.availableCredit -= amount;

		
		//This will keep track of individual customers items purchased
		this.purchases.push('$'+ amount, item, merchant);
		//refactor to clean up?
		console.log(`You purchased ${item} from ${merchant} for $${amount} dollars.`)
		console.log(`Your available credit is $${Number((this.availableCredit)).toLocaleString()}.`)
		}
		else(console.error(`Hi ${this.name}, this account is currently not active.`))
	}
	makePayment(amount, dayOfMonthPaid){
		if(amount > 0){
		this.balance -= amount
		this.availableCredit += amount
		this.payments.push('$' + amount)
		console.log(`Hi ${this.name}, you have made a payment of $${amount} dollars. Your available credit is now $${Number((this.availableCredit)).toLocaleString()}.`)
		 }
		 else(console.error("Payment must be more than 0 dollars"))
	}
	checkBalance(){
		console.log(`Your account balance is $${this.balance}.`)
	}
	checkPurchases(){
		console.log(this.purchases)
	}
	aprCalculator(days){
		if(days < 30){
			this.checkBalance()
		}
		else{
		//logic for APR
		let interest = this.balance * (this.apr/100)/(365) * days
			let accrued = Math.round(interest * 100)/100
				let newBalance = accrued + this.balance
				  this.balance += accrued
					console.log(`Your new account balance after ${days} days of interest is $${newBalance}`)
		}

	}
}
			 





//Open new account with name, APR% and credit limit
let andrewAccount = new Account('Andrew', 35, 10000)

// andrewAccount.purchase(500, 'Samsung TV','Best Buy', 1)
// andrewAccount.makePayment(200, 15)
// andrewAccount.makePayment(0,15)
// andrewAccount.aprCalculator(31)




//let christy = new Account ('Christy', 20, 5000)






		






