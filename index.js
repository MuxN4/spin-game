import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}; 

const JACKPOT_COMBINATION = ["A", "A", "A"];
const JACCKPOT_REWARD = 100;

//Function to deposit money
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log(chalk.red("Invalid deposit amount,try again."));  //color to error message
        }else{
            return numberDepositAmount
        }
    }
};

// Function to get the number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log(chalk.red("Invalid number of lines, try again.")); //color to error message
        } else {
            return numberOfLines;
        }
    }
};

// Function to get the bet per line
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberOfBet = parseFloat(bet);

        if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines) {
            console.log(chalk.red("Invalid bet,try again."));  //color to error message
        }else{
            return numberOfBet
        }
    }

};

// Function to spin the reels
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

// Function to transpose the reels into rows
const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }

    return rows;
};

// Function to print the rows
const printRows = (rows) => {
    for (const row of rows) {
        console.log(row.join(" | "));
    }
};

/// Function to calculate winnings
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    let isJackpot = false;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        if (symbols.every(symbol => symbol === symbols[0])) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
        // Check for jackpot
        if (symbols.join('') === JACKPOT_COMBINATION.join('')) {
            isJackpot = true;
        }
    }

    if (isJackpot) {
        winnings += JACKPOT_REWARD;
        console.log(chalk.magenta("JACKPOT! You won the jackpot reward of $") + chalk.magenta(JACKPOT_REWARD));
    }

    return winnings;
};

// Main game function
const game = () => {
    let balance = deposit();

    while (true) {
        console.log(chalk.green("You have a balance of $") + chalk.yellow(balance));
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;

        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);

        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;

        console.log(chalk.green("You won, $") + chalk.yellow(winnings.toString()));  //Color to winnings message
        
        if (balance <= 0) {
            console.log(chalk.red("You ran out of money1")); //color to game over message
            break;
        }
        const playAgain = prompt("Do you want to play again (y/n)? ");
        if (playAgain != "y") break;
    }
};


game();