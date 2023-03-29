const hideMenu = document.querySelector('#hide-menu');
const menuLeft = document.querySelector('#aside-left');

// Hide Menu
hideMenu.addEventListener('click', () => {
  menuLeft.classList.remove('show');
});

// Button Menu
const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  menuLeft.classList.add('show');
});

// Links click menu
const aLinks = document.querySelectorAll('#menu-container');
aLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menuLeft.classList.remove('show');
  });
});

let list = [];

const getRepo = async () => {
  const owner = 'PHSalazar';
  const token = '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';

  await fetch(`https://api.github.com/users/${owner}/repos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      list = data;
      setGit();
    })
    .catch((error) => console.error(error));
};

getRepo();

const setGit = () => {
  const numProjects = document.querySelector('#numProjects');
  numProjects.textContent = list.length;

  const projectsContainer = document.querySelector('#projects-container');

  list.map(
    ({ name, full_name, html_url, description, created_at, homepage }) => {
      projectsContainer.innerHTML += `<a class='card' href =' ${
        homepage !== null ? homepage : '#'
      }' target='_blank';>
    <h3>${name}</h3><span class='date'>${created_at.split('T')[0]}</span>
    <p>${description}</p>
    </a>`;
    },
  );
};
