window.addEventListener('load', function() {
    const carouselImages = document.querySelectorAll('#carousel img');
    let currentImage = 0;

    function changeImage() {
        carouselImages[currentImage].style.display = 'none';
        currentImage = (currentImage + 1) % carouselImages.length;
        carouselImages[currentImage].style.display = 'block';
    }

    carouselImages[currentImage].style.display = 'block';
    setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos

    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('data-url');
            if (url) {
                e.preventDefault();
                document.getElementById('arcgisFrame').src = url;
            }
        });
    });
});
