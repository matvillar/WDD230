const images = document.querySelectorAll('img');

let imgOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const actualImg = image.getAttribute('data-src');
    image.src = actualImg;
    observer.unobserve(image);
  });
}, imgOptions);

images.forEach((image) => {
  observer.observe(image);
});
