const lastUpdate = document.getElementById('date');

document.getElementById('year').textContent = new Date().getFullYear();
function lastEdit() {
  lastUpdate.textContent = document.lastModified;
}

lastEdit();
