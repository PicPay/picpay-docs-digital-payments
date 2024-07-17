window.onload = function () {
    const dropdownLinks = document.querySelectorAll('.dropdown__link.dropdown_custom_item');
    const dropdownContainers = document.querySelectorAll('.dropdown_custom_container');
    const navbarLinks = document.querySelectorAll('.navbar__link');

    dropdownLinks.forEach(link => {
        if (link.classList.contains('dropdown__link--active')) {
            const dropdownContainer = link.closest('.navbar__item.dropdown').querySelector('.dropdown_custom_container');
            if (dropdownContainer) {
                dropdownContainer.classList.add('dropdown_custom_container-active');
            }
        }
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const dropdownContainer = link.closest('.navbar__item.dropdown').querySelector('.dropdown_custom_container');
            if (dropdownContainer) {
                dropdownContainer.classList.add('dropdown_custom_container-active');
            }
        });
    });

    navbarLinks.forEach(navLink => {
        navLink.addEventListener('click', function (event) {
            dropdownContainers.forEach(container => container.classList.remove('dropdown_custom_container-active'));
        });
    });

 
};
