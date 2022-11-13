const requestURL =
  'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });
function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let paragraph = document.createElement('p');
  let paragraph2 = document.createElement('p');
  let portrait = document.createElement('img');
  let numCont = '';
  let divPic = document.createElement('div');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  paragraph.textContent = `Date of Birth: ${prophet.birthdate}`;
  paragraph2.textContent = `Place of Birth: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', prophet.imageurl);
  // Little touch
  if (prophet.order === 1) {
    numCont = 'st';
  } else if (prophet.order === 2) {
    numCont = 'nd';
  } else if (prophet.order === 3) {
    numCont = 'rd';
  } else {
    numCont = 'th';
  }
  portrait.setAttribute(
    'alt',
    `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${numCont} Latter-day President`
  );
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element

  card.appendChild(h2);
  card.appendChild(paragraph);
  card.appendChild(paragraph2);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}
