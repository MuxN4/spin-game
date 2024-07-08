# Spinning Reel Game

This is a simple spinning reel game implemented in JavaScript. The game allows players to deposit money, place bets on multiple lines, spin the reels, and check for winnings.

## Features

- Deposit money to start playing.
- Bet on 1 to 3 lines.
- Spin the reels to get random symbols.
- Check winnings based on matching symbols.
- Continue playing until the balance runs out or the player decides to stop.

## How to Play

1. **Deposit Money**: The game starts by asking the player to enter a deposit amount. This amount will be the player's initial balance.

2. **Choose Lines to Bet On**: The player is then asked to enter the number of lines to bet on (1 to 3).

3. **Place a Bet**: The player places a bet per line. The total bet amount is calculated as the bet per line multiplied by the number of lines.

4. **Spin the Reels**: The reels are spun to generate random symbols.

5. **Check Winnings**: The game checks if there are any winning lines based on the bet and the symbols on the lines. Winnings are added to the balance.

6. **Play Again**: The player can choose to play again if they have a remaining balance, or they can choose to stop playing.

## Symbol Details

- **Symbols and Counts**:
  - A: Appears 2 times
  - B: Appears 4 times
  - C: Appears 6 times
  - D: Appears 8 times

- **Symbol Values**:
  - A: 5
  - B: 4
  - C: 3
  - D: 2

## Running the Game

1. Make sure you have Node.js installed on your machine.
2. Create a new directory and navigate into it.
3. Create a file named `index.js` and copy the game code into this file.
4. Open a terminal in the directory containing `index.js`.
5. Run the game using the command:
    ```bash
    node index.js
    ```
### Conclusion

This README provides an overview of the Spinning Reel Game, instructions on how to play and run the game, and the full game code in the `index.js` file for reference.