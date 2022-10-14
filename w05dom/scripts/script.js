const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');
const error = document.querySelector('.error');

button.addEventListener('click', () => {
  if (input.value !== '') {
    const li = `<li class="item-list">
  <span>${input.value}</span><i class="fa-regular fa-circle-xmark"></i>
</li>`;
    list.innerHTML += li;
    input.value = '';
  } else {
    error.style.display = 'block';
  }
});

list.addEventListener('click', e => {
  if (e.target.classList.contains('fa-regular')) {
    e.target.parentElement.remove();
  }
});
