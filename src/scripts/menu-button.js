document.querySelector('.menu-toggle').addEventListener('click', () => {
    let dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});