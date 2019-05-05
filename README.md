# credit_card

## Directions
1. Open up creditCard.js in your text editor of choice. Make sure language is set to Javascript. Run commands.
2. Create a new account with the constructor using the parameters: name, APR and credit limit. Example - let andrew = new Account('Andrew', 20, 10000)
3. Purchase example - andrew.purchase(amount, item, merchant, dayOfMonthPurchased)
4. Payment example - andrew.makePayment(amount, dayOfMonthPaid)
5. To check balance - andrew.checkBalance()
6. To check all purchases - andrew.checkPurchases()
7. To check all payments - andrew.checkPayments()
8. To check interest accrued. Days on balance as paramater. Example - andrew.aprCalculator(days)
9. To check balance by day. Day of month as parameter - andrew.checkBalanceByDay(day)