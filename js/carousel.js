function goToCarousel(itemId) {
    var carousel = new bootstrap.Carousel(document.getElementById('myCarousel'));
    var itemIndex = Array.from(document.querySelectorAll('.carousel-item')).findIndex(item => item.id === itemId);
    carousel.to(itemIndex); // Navigate to the carousel item index
}