// Toggle mobile sidebar
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('open');
});

// Handle dropdown menus
document.querySelectorAll('.dropbtn').forEach(btn => {
  btn.addEventListener('click', function() {
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    this.querySelector('span').textContent = dropdown.style.display === 'block' ? '▲' : '▼';
  });
});
