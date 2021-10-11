// toggle = toggles class
// remove - remove class
// add - add class
// contains - checks classList for specific class
// classList - shows/gets all classes

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
/*   console.log(links.classList);
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links');
  }
  else {
    links.classList.add('show-links');
  } */
  links.classList.toggle('show-links');
});