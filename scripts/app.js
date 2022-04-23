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
    sourcebtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
    liveBtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './images/Snapshoo-Portfolio-2.svg',
    imageAlt: 'my second work project',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    sourcebtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
    liveBtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
  },
  {
    id: 3,
    title: 'Tonic',
    image: './images/Snapshoot-Portfolio-3.svg',
    imageAlt: 'my third work',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javaScript'],
    sourcebtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
    liveBtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './images/Snapshoot-Portfolio-4.svg',
    imageAlt: 'my fourth work',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    descript: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'javaScript'],
    sourcebtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
    liveBtn: 'https://github.com/Kandy-Peter/My-portfolio/tree/main',
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
const popupTitle = document.querySelector('.popup-h2'); 
const popupCanopy = document.querySelector('.popup-canopy'); 
const popImage = document.querySelector('.popup-title img'); 
const projectDetails = document.querySelector('.window-descript');
const language = document.querySelector('.window-languages');
const liveLink = document.querySelector('.btn-live');
const ghLink = document.querySelector('.btn-code');

popupsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup-ref');
    const id = Number(btn.parentNode.parentNode.id.split('-')[1]);
    const popup = document.querySelector(`[data-popup-id='${popupId}']`); 
    const {
      title,
      image,
      imageAlt,
      descript,
      languages,
      sourcebtn,
      liveBtn
    } = works.find((work) => work.id === id)

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

      popupContent.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      popup.classList.add('active');
      setTimeout(() => {
        popupTitle.innerText = title;
        popImage.setAttribute('src', image);
        popImage.setAttribute('alt', imageAlt);
        projectDetails.innerText = descript;
        language.innerHTML = languages.map((lang) => `<li>${lang}</li>`).join('');
        liveLink.setAttribute('href', liveBtn);
        ghLink.setAttribute('href', sourcebtn);
        
        popupContent.classList.add('active');
      }, 1);
    }
  });
});

//  ----------------- FORM VALIDATION -----------------

const form = document.querySelector('#form');
const userMail = document.querySelector("input[name='email']");
const emailMsg = document.getElementById('email-message');

const isValidEmail = (email) => {
  if (email !== email.toLowerCase()) {
    emailMsg.innerHTML = 'Enter a valid email in lowercase!';
    emailMsg.style.color = 'orange';
    userMail.style.border = '1px solid orange';
    return false;
  }
  return true;
};

function valideForm(e) {
  e.preventDefault();
  const email = userMail.value;
  if (isValidEmail(email)) {
    form.submit();
  }
}

form.addEventListener('submit', valideForm);