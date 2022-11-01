function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);

  els = Array.from(els);

  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, option) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("team__text-animation--active");
        return;
      }
      entry.target.classList.remove("team__text-animation--active");
    });
  }, option);

  observer.observe(el);
}

scrollTrigger(".team__text-animation", {
  rootMargin: "-100px",
});
