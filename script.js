// function toggleDarkMode() {
//     var body = document.body;
//     body.classList.toggle("dark-mode");
//   }


const toggleButton = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

toggleButton.addEventListener('click', function() {
  if (themeLink.getAttribute('href') === 'light-theme.css') {
    themeLink.href = 'dark-theme.css';
    localStorage.setItem('theme', 'dark');
  } else {
    themeLink.href = 'light-theme.css';
    localStorage.setItem('theme', 'light');
  }
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  themeLink.href = 'dark-theme.css';
} else {
  themeLink.href = 'light-theme.css';
}
