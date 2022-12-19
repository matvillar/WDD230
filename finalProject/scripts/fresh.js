const requestURL =
  'https://brotherblazzard.github.io/canvas-content/fruit.json';
const selectFruit1 = document.getElementById('select-fruits1');
const selectFruit2 = document.getElementById('select-fruits2');
const selectFruit3 = document.getElementById('select-fruits3');
const form = document.querySelector('form');
const formCard = document.querySelector('.form-card');
const submitCard = document.querySelector('.submit-card');
const ingredient1 = document.getElementById('ingredient1');
const ingredient2 = document.getElementById('ingredient2');
const ingredient3 = document.getElementById('ingredient3');
const firstName = document.getElementById('firstName');
const fName = document.getElementById('fName');
const totalC = document.getElementById('totalC');
const totalP = document.getElementById('totalP');
const totalF = document.getElementById('totalF');
const totalCalories = document.getElementById('totalCalories');
const totalS = document.getElementById('totalS');
let currFruits = [];
fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    const fruits = jsonObject;
    console.table(fruits);
    currFruits = fruits;
    displayOptions(fruits);
  });

function displayOptions(fruits) {
  for (let i = 1; i <= 3; i++) {
    for (let j = 0; j < fruits.length; j++) {
      let option = document.createElement('option');
      option.setAttribute('value', j);
      option.innerHTML = fruits[j].name;
      document.getElementById(`select-fruits${i}`).appendChild(option);
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getNutrition(selectFruit1.value, selectFruit2.value, selectFruit3.value);
  formCard.style.display = 'none';
  submitCard.style.display = 'block';
});

function getNutrition(index1, index2, index3) {
  // Carbs
  let totalCarb = currFruits[index1].nutritions.carbohydrates;
  totalCarb += currFruits[index2].nutritions.carbohydrates;
  totalCarb += currFruits[index3].nutritions.carbohydrates;
  // Protein
  let totalProtein = currFruits[index1].nutritions.protein;
  totalProtein += currFruits[index2].nutritions.protein;
  totalProtein += currFruits[index3].nutritions.protein;
  // Fats
  let totalFat = currFruits[index1].nutritions.fat;
  totalFat += currFruits[index2].nutritions.fat;
  totalFat += currFruits[index3].nutritions.fat;
  // calories
  let totalCal = currFruits[index1].nutritions.calories;
  totalCal += currFruits[index2].nutritions.calories;
  totalCal += currFruits[index3].nutritions.calories;
  // Sugar
  let totalSugar = currFruits[index1].nutritions.sugar;
  totalSugar += currFruits[index2].nutritions.sugar;
  totalSugar += currFruits[index3].nutritions.sugar;

  firstName.innerHTML = fName.value;
  ingredient1.innerHTML = currFruits[index1].name;
  ingredient2.innerHTML = currFruits[index2].name;
  ingredient3.innerHTML = currFruits[index3].name;
  totalC.innerHTML = totalCarb.toFixed(1);
  totalP.innerHTML = totalProtein.toFixed(1);
  totalF.innerHTML = totalFat.toFixed(1);
  totalCalories.innerHTML = totalCal.toFixed(1);
  totalS.innerHTML = totalSugar.toFixed(1);
}
