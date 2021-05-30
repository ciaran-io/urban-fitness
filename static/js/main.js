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

const searchButtonMobile = document.getElementById('search-button-mobile');
const searchBoxMobile = document.getElementById('search-box-mobile');
const searchIconMobile = document.getElementById('search-icon-mobile');
const searchIconCloseMobile = document.getElementById('search-icon-close-mobile');
const searchFieldMobile = document.getElementById('search-form-mobile');

// displays search box on click & adds focus on input
const displaySearchMobile = () => {
    searchBoxMobile.classList.toggle('hidden');
    searchIconMobile.classList.toggle('hidden');
    searchIconCloseMobile.classList.toggle('hidden');
    searchFieldMobile.focus();
};


const searchButtonDesktop = document.getElementById('search-button-desktop');
const searchBoxDesktop = document.getElementById('search-box-desktop');
const searchIconDesktop = document.getElementById('search-icon-desktop');
const searchIconCloseDesktop = document.getElementById('search-icon-close-desktop');
const searchFieldDesktop = document.getElementById('search-form-desktop');

const displaySearchDesktop = () => {
    searchBoxDesktop.classList.toggle('hidden');
    searchIconDesktop.classList.toggle('hidden');
    searchIconCloseDesktop.classList.toggle('hidden');
    searchFieldDesktop.focus();
};
