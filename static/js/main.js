const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuIcon = document.getElementById('icon-menu-open');
const mobileMenuIconClose = document.getElementById('icon-menu-close');

// display mobile menu
const changeMenuButton = () => {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuIcon.classList.toggle('hidden');
        mobileMenuIconClose.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu-open');
    });
};
changeMenuButton();

