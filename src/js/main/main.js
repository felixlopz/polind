window.addEventListener('load', function() {
  //  Mobile Navigation Toggling
  const menuIcon = document.querySelector('.navigation__icon');
  const hamburgerIcon = document.querySelector('.navigation__hamburger');
  const navList = document.querySelector('.navigation__list');

  menuIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('navigation__hamburger--open');
    navList.classList.toggle('navigation__list--open');
  });

  const glideConfig = {
    type: 'carousel',
    startAt: 2,
    perView: 2,
    focusAt: 'center',
    gap: 20,
  };

  new Glide('.glide', glideConfig ).mount();
});
