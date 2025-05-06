document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-dropdown-toggle');
    const menu = document.getElementById('menu-dropdown-item');

    let isOpen = false;

    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        isOpen = !isOpen;
        if (isOpen) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }
    });

    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
            isOpen = false;
        }
    });
});