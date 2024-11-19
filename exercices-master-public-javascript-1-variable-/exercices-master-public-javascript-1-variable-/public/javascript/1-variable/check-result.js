if (window.firstName) {
  document.getElementById('output').innerText = `Bonjour ${window.firstName},\nBienvenue dans ce cours de Javascript !`;
} else {
  document.getElementById('output').innerText = 'En attente';
}
