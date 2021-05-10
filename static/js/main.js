const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuFirstDiv = document.querySelector('#mobile-menu > div');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');

// displays mobile menu on click
const displayMobileMenu = () => {
    mobileMenuButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        mobileMenuFirstDiv.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu-open');
        mobileMenuIcon.classList.toggle('active');
    });
};
displayMobileMenu();

const searchButton = document.getElementById('search-button');
const searchBox = document.getElementById('search-box');
const searchIcon = document.getElementById('search-icon');
const searchIconClose = document.getElementById('search-icon-close');
const searchField = document.getElementById('search-form');

// displays search box on click & adds focus on input
const displaySearchBox = () => {
    searchButton.addEventListener('click', () => {
        searchBox.classList.toggle('hidden');
        searchIcon.classList.toggle('hidden');
        searchIconClose.classList.toggle('hidden');

        searchField.focus();
    });
};
displaySearchBox();
