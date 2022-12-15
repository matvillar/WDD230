const requestURL =
  'https://brotherblazzard.github.io/canvas-content/fruit.json';
const selectFruit = document.getElementById('select-fruits');
const fruitOptions = document.querySelector('.fruit-options');
const listOptions = document.querySelector('.list-options');

fetch(requestURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    const fruits = jsonObject;
    console.table(fruits);
    fruits.forEach(displayOptions);
  });

function displayOptions(option) {
  let options1 = document.createElement('option');
  let options2 = document.createElement('option');
  let options3 = document.createElement('option');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  let fruitList = document.createElement('div');
  let li = document.createElement('li');
  let ul = document.createElement('ul');

  // setting attributes
  console.log(option[0]);
  // selectFruit.appendChild(options1);
  // selectFruit.appendChild(options2);
  // selectFruit.appendChild(options3);
  // options1.appendChild(p1);
  // options2.appendChild(p2);
  // options3.appendChild(p3);
  // fruitList.setAttribute('class', 'fruit-list');
  // options1.setAttribute('value', option[0].name);
  // options2.setAttribute('value', option[1].name);
  // options3.setAttribute('value', option[2].name);
  // p1.innerText = option[0].name;
  // p2.innerText = option[1].name;
  // p3.innerText = option[2].name;

  // Appedn childs

  //   //Add events
  //   li.addEventListener('click', (e) => {
  //     const arr = [];
  //     const otherLi = document.createElement('li');
  //     otherLi.innerHTML = `<span class="innerLi">${e.target.innerText}</span> <span class="delete-li"> X</span>`;
  //     listOptions.appendChild(otherLi);

  //     console.log(arr);
  //     otherLi.addEventListener('click', (e) => {
  //       if (e.target.classList.contains('delete-li')) {
  //         e.target.parentElement.remove();
  //       }
  //     });
  //   });
}
