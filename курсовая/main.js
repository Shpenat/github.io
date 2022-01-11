$('a[href*="#"]').on('click', function() {  //плавный скролл до якоря
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});





function onEntry(entry) {  //плавное появление при скролле
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.card');

for (let elm of elements) {
  observer.observe(elm);
}