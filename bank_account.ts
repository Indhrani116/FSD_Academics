class BankAccountDetails {

    accountHolderName: string;
    currentBalance: number;

    constructor(holderName: string, openingAmount: number) {
        this.accountHolderName = holderName;
        this.currentBalance = openingAmount;
    }

    depositAmount(addMoney: number): void {
        this.currentBalance += addMoney;
        console.log(`Deposited Amount: ₹${addMoney}`);
    }

    withdrawAmount(removeMoney: number): void {
        if (removeMoney <= this.currentBalance) {
            this.currentBalance -= removeMoney;
            console.log(`Withdrawn Amount: ₹${removeMoney}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalanceDetails(): void {
        console.log(`Account Holder: ${this.accountHolderName}`);
        console.log(`Available Balance: ₹${this.currentBalance}`);
    }
}

let customerAccount = new BankAccountDetails("Indhrani", 5000);

customerAccount.depositAmount(2000);
customerAccount.withdrawAmount(1500);
customerAccount.displayBalanceDetails();