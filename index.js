#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var totalBalance = 10000;
var pinNumber = 1234;
var pinEntered = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Enter Your 4 Digit Pin Code",
        type: "number"
    }
]);
if (pinEntered.pin === pinNumber) {
    console.log("Correct Pin Code");
    var atmQuestion = await inquirer_1.default.prompt([
        {
            name: "accountType",
            message: "Please Select Account Type",
            type: "list",
            choices: ["Current Account", "Saving Account"]
        },
        {
            name: "transMethod",
            message: "Select Your Transcation Method",
            type: "list",
            choices: ["Cash Withdrawal", "Fast Cash"]
        }
    ]);
    console.log(atmQuestion);
    if (atmQuestion.transMethod === "Cash Withdrawal") {
        var cashwithdrawAmount = await inquirer_1.default.prompt([
            {
                name: "withdrawal",
                message: "Enter Your Amount To Withdraw",
                type: "number"
            }
        ]);
        if (totalBalance >= cashwithdrawAmount.withdrawal) {
            totalBalance -= cashwithdrawAmount.withdrawal;
            console.log("Your Balance is ".concat(totalBalance));
        }
        else {
            console.log("Insufficent Balance");
        }
    }
    else {
        var fastcashAmount = await inquirer_1.default.prompt([
            {
                name: "fastCash",
                message: "Select The Amount You Want To Withdraw",
                type: "list",
                choices: ["1000", "3000", "5000"]
            }
        ]);
        if (totalBalance >= fastcashAmount.fastCash) {
            totalBalance -= fastcashAmount.fastCash;
            console.log("Your Total Balance Is ".concat(totalBalance));
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
