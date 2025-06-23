const menuLinks = document.querySelectorAll('.menu-item[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    const targetSelector = menuLink.dataset.goto;

    if (targetSelector && document.querySelector(targetSelector)) {
      const gotoBlock = document.querySelector(targetSelector);
      const headerHeight = document.querySelector('header').offsetHeight;
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });

      e.preventDefault();
    }
  }
}

