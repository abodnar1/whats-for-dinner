var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];
var mainDishes = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];


var sideInput = document.querySelector("#side");
var mainDishInput = document.querySelector("#main-dish");
var dessertInput = document.querySelector("#dessert");
var entireMealInput = document.querySelector("#entire-meal");
var letsCookButton = document.querySelector(".lets-cook-button");
var cookPotSection = document.querySelector(".cook-pot-box");
var youShouldMakeSection = document.querySelector(".you-should-make-box");
var displayDish = document.querySelector(".display-random-dish");
var addRecipeButton = document.querySelector(".add-recipe-button");

letsCookButton.addEventListener("click", generateRandomDish);
addRecipeButton.addEventListener("click", addRecipeAlert);

var randomSide = sides[Math.floor(Math.random() * sides.length)];
var randomMainDish = mainDishes[Math.floor(Math.random() * mainDishes.length)];
var randomDessert = desserts[Math.floor(Math.random() * desserts.length)];
var randomEntireMeal = `${randomMainDish} with a side of ${randomSide} and ${randomDessert} for dessert!`;


function generateRandomDish() {
  var output = "";

  event.preventDefault();
  if (sideInput.checked) {
    output = randomSide + "!";
  } else if (mainDishInput.checked) {
    output = randomMainDish + "!";
  } else if (dessertInput.checked) {
    output = randomDessert + "!";
  } else if (entireMealInput.checked) {
    output = randomEntireMeal;
  } else {
    output = `No selection made. Please try again.`
  }

  hideCookPot();
  displayOutput(output);
};


function displayOutput(output) {
  displayDish.innerText = output;
};


function hideCookPot() {
  cookPotSection.classList.add("hidden");
  youShouldMakeSection.classList.remove("hidden");
};

function addRecipeAlert() {
  window.alert("Oops! Looks like that's an option at this time. Please try again.");
};
