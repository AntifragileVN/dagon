let question = document.querySelectorAll(".question");

let observerOptions = {
  rootMargin: "-20px",
};

let observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
      console.log("gg");
      return;
    }
    entry.target.classList.remove("animation");
  });
}

let target = ".question";

document.querySelectorAll(target).forEach((i) => {
  if (i) {
    observer.observe(i);
  }
});
