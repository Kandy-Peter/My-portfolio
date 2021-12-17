const body = document.querySelector('body');
const navigation = document.querySelector('.toggle');
const portfolio = document.querySelector('#portfolio');

// --------------------MOBILE-MENU--------------------------

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.menu-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));

//  -----------------POPUP-WINDOW-------------

const works = [
  {
    id: 1,
    title: 'Tonic',
    image: './images/Snapshoot-Portfolio-1.svg',
    imageAlt: 'my first work',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './images/Snapshoo-Portfolio-2.svg',
    imageAlt: 'my second work project',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    image: './images/Snapshoot-Portfolio-3.svg',
    imageAlt: 'my third work',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './images/Snapshoot-Portfolio-4.svg',
    imageAlt: 'my fourth work',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'javaScript'],
    sourcebtn: '#',
    liveBtn: '#',
  },
];

for (let i = 0; i < works.length; i += 1) {
  const work = works[i];

  portfolio.innerHTML += `
      <div class="card card-1" id="btn-${work.id}">
        <img src="${work.image}" alt="${work.imageAlt}">
        <div class="details">
            <h2>${work.title}</h2>
            <div class="canopy">
                <h4>${work.canopy[0]}</h4>
                <ul>
                    <li>${work.canopy[1]}</li>
                    <li>${work.canopy[2]}</li>
                </ul>
            </div>
            <p class="card-descript">${work.descript}</p>
            <ul class="languages">
                <li>${work.languages[0]}</li>
                <li>${work.languages[1]}</li>
                <li>${work.languages[2]}</li>
            </ul>
            <button data-popup-ref="myPopup">See project</button>
      </div>
  `;
}

const popupsBtn = document.querySelectorAll('[data-popup-ref]');

popupsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup-ref');
    const popup = document.querySelector(`[data-popup-id='${popupId}']`);

    if (popup !== undefined && popup !== null) {
      const popupContent = popup.querySelector('.popup-content');
      const closeBtns = popup.querySelectorAll('[data-dismiss-popup]');

      closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          setTimeout(() => {
            popup.classList.remove('active');
          }, 250);
          popupContent.classList.remove('active');
        });
      });

      popupContent.addEventListener('click', (ev) => {
        ev.stopPropagation();
      });

      popup.classList.add('active');
      setTimeout(() => {
        popupContent.classList.add('active');
      }, 1);
    }
  });
});

//  ----------------- FORM VALIDATION -----------------

const userMail = document.querySelector("input[name='email']");
const emailMsg = document.getElementById('email-message');
const button = document.getElementById('sub-btn');

const isValidEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

function valideForm(e) {
  const email = userMail.value;
  if (isValidEmail(email)) {
    e.preventDefault();
  } else {
    emailMsg.innerHTML = 'Please, enter your email(in lowercase)!';
    emailMsg.style.color = 'orange';
    userMail.style.border = '1px solid orange';
  }
}
button.addEventListener('click', valideForm);