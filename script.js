var navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
       
        navLinks.forEach(function(innerLink) {
            innerLink.classList.remove('underline');
        });

       
        link.classList.add('underline');
    });
});