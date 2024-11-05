"use strict";

function goToCarousel(itemId) {
  var carousel = new bootstrap.Carousel(document.getElementById('myCarousel'));
  var itemIndex = Array.from(document.querySelectorAll('.carousel-item')).findIndex(function (item) {
    return item.id === itemId;
  });
  carousel.to(itemIndex); // Navigate to the carousel item index
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  event.preventDefault();
}