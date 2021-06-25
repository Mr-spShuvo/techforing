document.addEventListener('DOMContentLoaded', function () {
  new Splide('#testimonials-slide', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    autoplay: true,
    interval: 3500,
    gap: '3rem',
    breakpoints: {
      990: {
        perPage: 1
      }
    }
  }).mount();

  new Splide('#pricing-slide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    breakpoints: {
      780: {
        perPage: 1
      },
      1020: {
        perPage: 2
      },
      1200: {
        perPage: 3
      }
    }
  }).mount();

  new Splide('#resources-slide', {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    perPage: 3,
    perMove: 1,
    gap: '3rem',
    breakpoints: {
      990: {
        perPage: 1
      }
    }
  }).mount();
});
