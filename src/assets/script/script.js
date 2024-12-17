const dropdowns = document.querySelectorAll('.filter-dropdown');

  dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');

    select.addEventListener('click', () => {
      menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;
        menu.classList.remove('menu-open');
        options.forEach(option => {
          option.classList.remove('active');
        });

        option.classList.add('active');
      });
    });
  });