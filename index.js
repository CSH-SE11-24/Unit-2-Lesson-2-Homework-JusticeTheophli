// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let word = "justice"
console.log(word)
// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let user = prompt("Guess a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if(word.includes (user)){
  console.log("Your letter is in the word");
}else{
  console.log("Your letter is not in the word, try again")
}
// Prompt the user to guess the word 

let guess = prompt("Guess the word")

// Increase attempts by 1

attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user

if(guess === word){
  console.log("Congratulations, your guess is correct!")
}else{
  console.log("Sorry your guess is incorrect")
}

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while(guess !== word)
// In the while loop, copy the prompt and if/else check for the word

while (guess!== word){
  guess = prompt("Guess the word")
}
// In the while loop, copy the attempts increment
while (guess!== word){
  guess = prompt ("Guess the word")
  attempts++
  if(guess === word){
    console.log("Your guess is correct!")
  }else{
    console.log("Your guess is incorrect, try again.")
  }
}
console.log("It took you" + attempts +"attempts to guess the word")

// After the while loop, print "It took (attempts) attempts" 
console.log("It took you" + attempts +"attempts to guess the word")
