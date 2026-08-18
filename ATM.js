let account={
    name:"zara",
    pin:2567,
    balance:1000000
};
alert("Welcome to ATM");
alert("Account Name: "+account.name);
alert("Account Balance: "+account.balance);
let userpin = Number(prompt("Enter your pin"));
if (userpin == account.pin) {
    alert("Pin is correct. Welcome, " + account.name);
} else {
    alert("Incorrect pin. Please try again.");
}
let choice = prompt("1. Check Balance\n2. Deposit Money\n3. Withdraw Money\n4. Exit");
if(choice == "1"){
    document.write("Your current balance is: " + account.balance);
}
else if(choice == "2"){
   let depositAmount = Number(prompt("Enter the amount to deposit:"));

if (depositAmount > 0) {

    account.balance += depositAmount;

    alert("Deposit successful");
    
} else {

    alert("Invalid deposit amount");

}
}
else if(choice == "3"){
    let withdrawAmount = Number(prompt("Enter the amount to withdraw:"));
    if (withdrawAmount <= account.balance) {
        account.balance -= withdrawAmount;
        document.write("Withdrawal successful. Your new balance is: " + account.balance);
    }else{
        document.write("Insufficient balance. Your current balance is: " + account.balance);
    }
}
else if(choice == "4"){
    document.write("Thank you for using our ATM service. Goodbye!");
}