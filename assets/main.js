document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });

    const link = '#link-' + this.getAttribute('href').replace('#', '');

    const linkMenu = document.querySelector(link);
    removeLinksTag();

    linkMenu.classList.add('active');
    console.log(linkMenu);
  });
});

// NAV LINKS
function removeLinksTag() {
  const links = document.querySelectorAll('#nav ul li a');
  links.forEach((item) => {
    item.classList.remove('active');
  });
}

function linkNav(event) {
  removeLinksTag();
  event.target.classList.add('active');
  const menuMobile = document.getElementById('menu');

  if (menuMobile.classList.contains('active')) {
    menuMobile.classList.remove('active');
  }
}

const menuLinks = document.querySelectorAll('#nav li a');
menuLinks.forEach((item) => {
  item.addEventListener('click', linkNav);
});

// Mobile
const btnMobileMenu = document.getElementById('btnMenu');

function handleMenu() {
  const menuMobile = document.getElementById('menu');
  menuMobile.classList.toggle('active');
}
btnMobileMenu.addEventListener('click', handleMenu);
