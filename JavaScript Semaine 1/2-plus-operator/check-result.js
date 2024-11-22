if (window.a && window.b && window.result) {
  // Display the operation and its result in the HTML
  console.log('ch');
  document.querySelectorAll('.display-when-done').forEach((element) => {
    if (element.tagName === 'LI') {
      element.style.display = 'list-item';
    } else {
      element.style.display = 'block';
    }
  });
  document.getElementById('outputA').innerText = window.a;
  document.getElementById('outputB').innerText = window.b;
  document.getElementById('output').innerText = window.result;
} else {
  document.getElementById('output').innerText = 'En attente';
}
