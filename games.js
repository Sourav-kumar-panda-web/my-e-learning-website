function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
  }
  
  function toggleTheme() {
    document.body.classList.toggle('dark');
    const icon = document.getElementById('theme-icon');
    icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  }
  