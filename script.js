const myElements = document.querySelectorAll('.hide');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hide');
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.add('hide');
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed

myElements.forEach(element => {
  observer.observe(element);
});
