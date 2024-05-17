document.addEventListener('DOMContentLoaded', () => {
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');

    dropdownHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icons');

            if (content.style.display === "block") {
                content.style.display = "none";
                content.style.maxHeight = null;
                icon.classList.remove('ri-arrow-up-s-line');
                icon.classList.add('ri-arrow-down-s-line');
            } else {
                content.style.display = "block";
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.remove('ri-arrow-down-s-line');
                icon.classList.add('ri-arrow-up-s-line');
            }
        });
    });
});
