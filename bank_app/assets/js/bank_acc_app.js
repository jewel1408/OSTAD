class BankAccount {
    constructor() {
        this.accountNumber = ""; // Initialize with an empty string
        this.ownerName = "";
        this.balance = 0; // Updated balance as a numeric value
    }

    displayAccountInfo() {
        return this.accountNumber;
    }

    deposit(amount) {
        if (amount > 0) {
            const previousBalance = this.balance;
            this.balance += amount;
            return `Deposit successful! into ${this.accountNumber}\nPrevious Balance: \u09F3 ${previousBalance}/=\nDeposit Amount: \u09F3 ${amount}/=\nNew Balance: \u09F3 ${this.balance}/=`;
        } else {
            return "Invalid deposit amount. Please provide a positive value.";
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            const previousBalance = this.balance;
            if (amount <= this.balance) {
                this.balance -= amount;
                return `Withdraw successful! from ${this.accountNumber}\nPrevious Balance: \u09F3 ${previousBalance}/=\nWithdraw Amount: \u09F3 ${amount}/=\nNew Balance: \u09F3 ${this.balance}/=`;
            } else {
                return "Insufficient funds!\nCannot withdraw more than the current balance.";
            }
        } else {
            return "Invalid withdrawal amount. Please provide a positive value.";
        }
    }

    getBalance() {
        return (
            "Account Number: " + this.accountNumber +
            "\nOwner Name: " + this.ownerName +
            "\nClosing Balance: \u09F3 " + this.balance + "/="
        );
    }
}

// Create two instances of BankAccount
const BankAccObj1 = new BankAccount();
BankAccObj1.accountNumber = "01817630762"; // Set a unique account number
BankAccObj1.ownerName = "Jewel"; // Set the owner's name
BankAccObj1.balance = 3000; // Set the initial balance

const BankAccObj2 = new BankAccount();
BankAccObj2.accountNumber = "01708154867"; // Another unique account number
BankAccObj2.ownerName = "Ahmed"; // Owner's name for the second account
BankAccObj2.balance = 1000; // Initial balance for the second account

// Account Info
//Account 1
console.log("Initial Account Info:");
console.log("Account Number: " + BankAccObj1.displayAccountInfo());
console.log("Owner Name: " + BankAccObj1.ownerName);
console.log("Opening Balance: \u09F3 " + BankAccObj1.balance + "/=");
//Account 2
console.log("\nAccount Number: " + BankAccObj2.displayAccountInfo());
console.log("Owner Name: " + BankAccObj2.ownerName);
console.log("Opening Balance: \u09F3 " + BankAccObj2.balance + "/=");

// Deposit into Account 1
console.log("\nDeposit and Withdrawal:");
console.log(BankAccObj1.deposit(500));

// Withdraw from Account 1
console.log(BankAccObj1.withdraw(1000));

// Closing Account Info of Account 1
console.log("\nUpdated Account Info:");
console.log(BankAccObj1.getBalance());