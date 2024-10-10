const button = document.getElementById('gradientButton');

button.addEventListener('mouseenter', () => {
    button.classList.add('bounce');
});

button.addEventListener('mouseleave', () => {
    button.classList.remove('bounce');
});