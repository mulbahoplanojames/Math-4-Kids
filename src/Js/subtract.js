//Gettinng the various option and storing them in their specific variable to be use.
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");

//Wrong audio
const audio = document.querySelector("#audio");

let answer = 0;

// An arrow function to generate a random equation.
const generateEquation = () => {
  //Generating random numbers and storing them in each variables
  let num1 = Math.floor(Math.random() * 16);
  let num2 = Math.floor(Math.random() * 16);
  let dummyAnswer1 = Math.floor(Math.random() * 16);
  let dummyAnswer2 = Math.floor(Math.random() * 16);

  //Changing num1 and num2 innerHTML to the random numbers Generated;
  document.querySelector("#num1").innerHTML = num1;
  document.querySelector("#num2").innerHTML = num2;

  answer = num1 - num2;

  let allAnswers = [answer, dummyAnswer1, dummyAnswer2];

  let switchAnswer = [];

  for (i = allAnswers.length; i--; ) {
    switchAnswer.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswer[0];
  option2.innerHTML = switchAnswer[1];
  option3.innerHTML = switchAnswer[2];
};

//Adding Event Listeners on the various options.
option1.addEventListener("click", () => {
  if (option1.innerHTML == answer) {
    generateEquation();
  } else {
    audio.play();
  }
});

option2.addEventListener("click", () => {
  if (option2.innerHTML == answer) {
    generateEquation();
  } else {
    audio.play();
  }
});

option3.addEventListener("click", () => {
  if (option3.innerHTML == answer) {
    generateEquation();
  } else {
    audio.play();
  }
});

generateEquation();

// Navigation functionality
const showMenu = document.querySelector("#show_menu");
const hideMenu = document.querySelector("#hide_menu");
const navLinks = document.querySelector(".nav-links");

showMenu.addEventListener("click", () => {
  navLinks.style.right = "0";
});

hideMenu.addEventListener("click", () => {
  navLinks.style.right = "-300px";
});
