let account = {
    name: "Zara",
    pin: 2567,
    balance: 100000
};

let transactions = [];


// STEP 1: LOGIN

let login = Number(prompt("Enter your PIN:"));

if (login === account.pin) {

    alert("Welcome " + account.name);


    // STEP 2: ATM MENU

    let choice = "";

    while (choice !== "5") {

        choice = prompt(
            "1. Check Balance\n" +
            "2. Deposit Money\n" +
            "3. Withdraw Money\n" +
            "4. Transaction History\n" +
            "5. Exit"
        );


        // STEP 3: CHECK BALANCE

        if (choice === "1") {

            alert(
                "Account Name: " + account.name +
                "\nCurrent Balance: Rs. " + account.balance
            );
        }


        // STEP 4: DEPOSIT

        else if (choice === "2") {

            let depositAmount = Number(
                prompt("Enter the amount to deposit:")
            );

            if (depositAmount > 0) {

                account.balance += depositAmount;

                transactions.push({
                    type: "Deposit",
                    amount: depositAmount
                });

                alert(
                    "Deposit successful!" +
                    "\nDeposited: Rs. " + depositAmount +
                    "\nNew Balance: Rs. " + account.balance
                );

            } else {

                alert("Invalid deposit amount.");
            }
        }


        // STEP 5: WITHDRAW

        else if (choice === "3") {

            let withdrawAmount = Number(
                prompt("Enter the amount to withdraw:")
            );

            if (withdrawAmount <= 0) {

                alert("Invalid withdrawal amount.");

            }

            else if (withdrawAmount % 500 !== 0) {

                alert("Withdrawal must be a multiple of 500.");

            }

            else if (withdrawAmount > account.balance) {

                alert(
                    "Insufficient balance." +
                    "\nYour balance is: Rs. " + account.balance
                );

            }

            else {

                account.balance -= withdrawAmount;

                transactions.push({
                    type: "Withdrawal",
                    amount: withdrawAmount
                });

                alert(
                    "Withdrawal successful!" +
                    "\nWithdrawn: Rs. " + withdrawAmount +
                    "\nRemaining Balance: Rs. " + account.balance
                );
            }
        }


        // STEP 6: TRANSACTION HISTORY

        else if (choice === "4") {

            if (transactions.length === 0) {

                alert("No transactions yet.");

            } else {

                let history = "Transaction History:\n\n";

                for (let x = 0; x < transactions.length; x++) {

                    history +=
                        transactions[x].type +
                        ": Rs. " +
                        transactions[x].amount +
                        "\n";
                }

                history +=
                    "\nCurrent Balance: Rs. " +
                    account.balance;

                alert(history);
            }
        }


        // STEP 7: EXIT

        else if (choice === "5") {

            alert("Thank you for using our ATM. Goodbye!");

        }


        // INVALID MENU OPTION

        else {

            alert("Invalid choice. Please select 1 to 5.");
        }
    }


} else {

    alert("Incorrect PIN. Access denied.");
}