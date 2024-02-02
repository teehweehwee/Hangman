// for Lobby Page stuff:
document.addEventListener("DOMContentLoaded", function () {
  const lobbyPage = document.getElementById("lobbyPage");
  const rulesButton = document.getElementById("rulesButton");
  const transparencyOverlay = document.getElementById("transparencyOverlay");
  const startButton = document.getElementById("startButton");
  const categoriesPage = document.getElementById("categoriesPage");
  const gameplayPage = document.getElementById("gameplaypage");
  const winPage = document.getElementById("winMessage")
  const losePage = document.getElementById("loseMessage")
  let displayUnderscore = [];
  let answerKey;
  let remainingGuesses = 5;
  const updateGuesses = document.getElementById("remainingGuesses");
  

  // read "Rules" before click "Start"
  // Initial disable "Start" button
  disableStartButton();

  // show transparency page as block before enabling "Start" button
  function showTransparencyOverlay() {
    transparencyOverlay.style.display = "block";
    enableStartButton();
  }

  // hide transparency page, still enable "Start" button
  function hideTransparencyOverlay() {
    transparencyOverlay.style.display = "none";
    enableStartButton();
  }

  function enableStartButton() {
    startButton.disabled = false;
  }

  function disableStartButton() {
    startButton.disabled = true;
  }

  function getRandomWord(category) {
    const randomIndex = Math.floor(Math.random() * category.length);
    return category[randomIndex];
  }

  // start game function & show categories
  function startGame() {
    startButton.style.display = "none";
    categoriesPage.style.display = "block";
  }

  function displayWord() {
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.textContent = displayUnderscore.join(" ");
  }

  function generateButtons() {
    let buttonHTML = "qwertyuiopasdfghjklzxcvbnm"
      .split("")
      .map(
        (letter) => `<button class="keycaps" id='${letter}'>${letter}</button>`
      )
      .join("");
    document.getElementById("button-container").innerHTML = buttonHTML;
  }

  function controlClick(event) {
    const clickedLetter = event.target.id;
    const alphabetOnly = clickedLetter.match(/[a-zA-Z]/);
    const test = alphabetOnly[0];
    alert(test);
    makeGuess(test);
    alert(remainingGuesses);
  }

  // Function to make a guess
  function makeGuess(userInput) {
    //const guessInput = document.getElementById('guess-input');
    //const userInput = guessInput.value;
    if (userInput && remainingGuesses > 0) {
      // Check if the guess is in the word
      // ^"guess" is a variable that stores the input from player AND GUESS IS NOT A NUMBER!! If no input on keyboard, guess is by default empty which will return false when chking for truthiness values
      // "remainingGuesses" is the tries that you have
      if (answerKey.includes(userInput)) {
        // Update answerKeyIndividualFruit with correct guesses
        for (let i = 0; i < answerKey.length; i++) {
          if (answerKey[i] === userInput) {
            displayUnderscore[i] = userInput;
          }
        }
        // Display the updated word
        displayWord();
        if (!displayUnderscore.includes("_")) {
          alert("Not bad wor! You guessed the word.");
          winPage.style.display = "block";
          gameplayPage.style.display = "none";
          initializeGame();
        }
      } else {
        // Incorrect guess
        remainingGuesses--;
        updateGuesses.textContent = remainingGuesses;
        // Update remaining guesses display
        //   document.getElementById("remaining-guesses").textContent =
        //     remainingGuesses;
        // Check if the player ran out of guesses
        if (remainingGuesses === 0) {
          alert("BOOoooOO! The word was: " + answerKey);
          losePage.style.display = "block";
          gameplayPage.style.display = "none";
          initializeGame();
        }
      }
    }
  }

  // click into categories
  const categoryButtons = document.querySelectorAll(".categories");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // display an alert with the selected category
      const selectedCategory = button.id;
      lobbyPage.style.display = "none";
      categoriesPage.style.display = "none";
      alert(`You selected the ${selectedCategory} category!`);
      gameplayPage.style.display = "block";
      generateButtons();

updateGuesses.textContent= remainingGuesses


      const keyboard = document.querySelectorAll(".keycaps");

      keyboard.forEach((button) =>
        button.addEventListener("click", controlClick)
      );

      // switch case
      switch (selectedCategory) {
        
        case "flowers":
          const randomFlower = getRandomWord(flowers);
          alert(`You selected the ${randomFlower} word!`);




          let answerKeyIndividualFlower = randomFlower.split("");
          alert(`You selected the ${answerKeyIndividualFlower} alphabets!`);

          for (i = 0; i < randomFlower.length; i++) {
            displayUnderscore.push("_");
          }
          displayWord();
          alert(`You selected the ${displayUnderscore}!`);
          answerKey = answerKeyIndividualFlower;
          






          break;

        // add cases for other categories if needed
        case "colours":
          // code for handling the colours category
          const randomColour = getRandomWord(colours);
          alert(`You selected the ${randomColour} word!`);



          let answerKeyIndividualColour = randomColour.split("");
          alert(`You selected the ${answerKeyIndividualColour} alphabets!`);

          for (i = 0; i < randomColour.length; i++) {
            displayUnderscore.push("_");
          }
          displayWord();
          alert(`You selected the ${displayUnderscore}!`);
          answerKey = answerKeyIndividualColour;
         





          break;

        case "vegetables":
          // code for handling the vegetables category
          const randomVegetable = getRandomWord(vegetables);
          alert(`You selected the ${randomVegetable} word!`);
          
          
          
          
          
          let answerKeyIndividualVegetable = randomVegetable.split("");
          alert(`You selected the ${answerKeyIndividualVegetable} alphabets!`);

          for (i = 0; i < randomVegetable.length; i++) {
            displayUnderscore.push("_");
          }
          displayWord();
          alert(`You selected the ${displayUnderscore}!`);
          answerKey = answerKeyIndividualVegetable;
         
          
          
          
          
          
          
          break;          
        case "fruits":
          // code for handling the fruits category
          const randomFruits = getRandomWord(fruits);
          alert(`You selected the ${randomFruits} word!`);
          let answerKeyIndividualFruit = randomFruits.split("");
          alert(`You selected the ${answerKeyIndividualFruit} alphabets!`);

          for (i = 0; i < randomFruits.length; i++) {
            displayUnderscore.push("_");
          }
          displayWord();
          alert(`You selected the ${displayUnderscore}!`);
          answerKey = answerKeyIndividualFruit;
        
          break;
      }
    });

    // event listeners for the Rules button
    rulesButton.addEventListener("mouseover", showTransparencyOverlay);
    rulesButton.addEventListener("mouseout", hideTransparencyOverlay);
    startButton.addEventListener("click", startGame);
  });
});
