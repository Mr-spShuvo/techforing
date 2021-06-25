document.addEventListener('DOMContentLoaded', function () {
  new Splide('#testimonials-slide', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    autoplay: true,
    gap: '3rem'
  }).mount();

  new Splide('#pricing-slide', {
    type: 'loop',
    perPage: 4,
    perMove: 1
  }).mount();

  new Splide('#resources-slide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '3rem'
  }).mount();
});
