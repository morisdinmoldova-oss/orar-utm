const schedule = {
  odd: [
    { day: 'Luni', classes: [
      ['08:00–09:30', 'Nu ai pereche'],
      ['09:45–11:15', 'Chimia', 'Curs', 'dr.conf. Veronica Dragancea / dr.conf. Angela Gurev', 'Blocul 5, Cab. 413'],
      ['11:30–13:00', 'Fizica', 'Laborator', 'O. Bernat / S. Gutium', 'Blocul 3, Cab. 305'],
      ['13:30–15:00', 'Nu ai pereche'],
      ['15:15–16:45', 'Educația fizică I', 'Seminar', '', 'str. Studenților 5']
    ]},
    { day: 'Marți', classes: [
      ['08:00–09:30', 'Fizica', 'Curs', 'conf.univ.dr. Mihai Popa', 'Blocul 2, Cab. 204'],
      ['09:45–11:15', 'Nu ai pereche'],
      ['11:30–13:00', 'Tehnologii Informaționale (TI)', 'Laborator / Practică, sbg. I', 'asist. Gh. Sîrbu', 'Blocul 2, Cab. 222'],
      ['13:30–15:00', 'Nu ai pereche']
    ]},
    { day: 'Miercuri', classes: [
      ['08:00–09:30', 'Limba engleză p.I', 'Seminar', 'asist. Aa Jechiu', 'Blocul 2, Cab. 321'],
      ['09:45–11:15', 'Analiza matematică I', 'Curs', 'conf.univ.dr. Petru Moloșnic', 'Blocul 2, Cab. 204'],
      ['11:30–13:00', 'Analiza matematică I', 'Curs', 'conf.univ.dr. Petru Moloșnic', 'Blocul 2, Cab. 204'],
      ['13:30–15:00', 'Tehnologii Informaționale', 'Curs', 'dr.conf. Andrei Chiciuc', 'Blocul 2, Cab. 209'],
      ['17:00–18:30', 'Grafica inginerească', 'Laborator / Practică', 'dr.conf. I. Melnic / asist. L. Mihailov', 'Blocul 2, Cab. 422']
    ]},
    { day: 'Joi', classes: [
      ['08:00–09:30', 'Algebra liniară și geometria analitică', 'Curs', 'prof.univ. Cozma Dumitru', 'Blocul 2, Cab. 209'],
      ['09:45–11:15', 'Fizica', 'Curs', 'dr.conf. Mihai Popa', 'Blocul 2, Cab. 209'],
      ['11:30–13:00', 'Bazele energeticii și ingineriei electrice', 'Curs', 'dr.lect. C. Guțu-Chetrușca / dr.lect. Octavian Mangos', 'Blocul 2, Cab. 210'],
      ['13:30–15:00', 'Etică și integritate academică', 'Curs', 'dr.conf. Angela Cuciurca', 'Blocul 2, Cab. 209'],
      ['15:15–16:45', 'Analiza matematică I', 'Seminar', 'Nadejda Lupol', 'Blocul 2, Cab. 411']
    ]},
    { day: 'Vineri', classes: [
      ['08:00–09:30', 'Algebra liniară și geometria analitică (ALGA)', 'Seminar', 'prof. D. Cozma', 'Blocul 2, Cab. 204'],
      ['09:45–11:15', 'Grafica inginerească', 'Laborator / Practică', 'dr.conf. I. Melnic / asist. L. Mihailov', 'Blocul 2, Cab. 422'],
      ['11:30–13:00', 'Nu ai pereche']
    ]}
  ],
  even: [
    { day: 'Luni', classes: [
      ['08:00–09:30', 'Nu ai pereche'],
      ['09:45–11:15', 'Chimia', 'Curs', 'dr.conf. Veronica Dragancea / dr.conf. Angela Gurev', 'Blocul 5, Cab. 413'],
      ['11:30–13:00', 'Chimia', 'Laborator, gr. I / gr. II', '', 'Blocul 5, Cab. 304'],
      ['13:30–15:00', 'Nu ai pereche'],
      ['15:15–16:45', 'Educația fizică I', 'Seminar', '', 'str. Studenților 5']
    ]},
    { day: 'Marți', classes: [
      ['08:00–09:30', 'Grafica inginerească', 'Curs', 'conf.univ.dr. Iurie Melnic', 'Blocul 2, Cab. 209'],
      ['09:45–11:15', 'Nu ai pereche'],
      ['11:30–13:00', 'Tehnologii Informaționale (TI)', 'Laborator / Practică, sbg. I', 'asist. Gh. Sîrbu', 'Blocul 2, Cab. 222'],
      ['13:30–15:00', 'Nu ai pereche']
    ]},
    { day: 'Miercuri', classes: [
      ['08:00–09:30', 'Limba engleză p.I', 'Seminar', 'asist. Aa Jechiu', 'Blocul 2, Cab. 321'],
      ['09:45–11:15', 'Analiza matematică I', 'Curs', 'conf.univ.dr. Petru Moloșnic', 'Blocul 2, Cab. 204'],
      ['11:30–13:00', 'Analiza matematică I', 'Curs', 'conf.univ.dr. Petru Moloșnic', 'Blocul 2, Cab. 204'],
      ['13:30–15:00', 'Tehnologii Informaționale', 'Curs', 'dr.conf. Andrei Chiciuc', 'Blocul 2, Cab. 209'],
      ['17:00–18:30', 'Nu ai pereche']
    ]},
    { day: 'Joi', classes: [
      ['08:00–09:30', 'Algebra liniară și geometria analitică', 'Curs', 'prof.univ. Cozma Dumitru', 'Blocul 2, Cab. 209'],
      ['09:45–11:15', 'Fizica', 'Curs', 'dr.conf. Mihai Popa', 'Blocul 2, Cab. 209'],
      ['11:30–13:00', 'Bazele energeticii și ingineriei electrice', 'Curs', 'dr.lect. C. Guțu-Chetrușca / dr.lect. Octavian Mangos', 'Blocul 2, Cab. 210'],
      ['13:30–15:00', 'Etică și integritate academică', 'Curs', 'dr.conf. Angela Cuciurca', 'Blocul 2, Cab. 209'],
      ['15:15–16:45', 'Fizica', 'Seminar', 'dr.conf. Mihai Popa', 'Blocul 2, Cab. 221']
    ]},
    { day: 'Vineri', classes: [
      ['08:00–09:30', 'Bazele energeticii și ingineriei electrice (BEIE)', 'Seminar', 'asist. L. Grușac', 'Blocul 2, Cab. 222'],
      ['09:45–11:15', 'Tehnologii Informaționale (TI)', 'Laborator / Practică', 'asist. Gh. Sîrbu', 'Blocul 2, Cab. 222'],
      ['11:30–13:00', 'Nu ai pereche']
    ]}
  ]
};

function getIsoWeekNumber(date) {
  const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = currentDate.getUTCDay() || 7;
  currentDate.setUTCDate(currentDate.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 1));
  return Math.ceil((((currentDate - yearStart) / 86400000) + 1) / 7);
}

function getCurrentWeekKey() {
  return getIsoWeekNumber(new Date()) % 2 === 0 ? 'even' : 'odd';
}

let selectedWeek = getCurrentWeekKey();
let selectedDay = 'all';

const scheduleGrid = document.querySelector('#schedule-grid');
const weekLabel = document.querySelector('#week-label');
const currentDate = document.querySelector('#current-date');
const currentTime = document.querySelector('#current-time');
const greeting = document.querySelector('#greeting');
const prepModal = document.querySelector('#prep-modal');
const prepTitle = document.querySelector('#prep-title');
const prepSubtitle = document.querySelector('#prep-subtitle');
const prepContent = document.querySelector('#prep-content');
const visitorNameForm = document.querySelector('#visitor-name-form');
const visitorNameInput = document.querySelector('#visitor-name');
let visitorName = localStorage.getItem('orar-ie-264-name') || '';

const preparation = {
  'Chimia': ['Recitește tema indicată în caiet.', 'Pregătește halatul și materialele pentru laborator.', 'Notează întrebările pentru profesor.'],
  'Fizica': ['Recapitulează formulele din lecția precedentă.', 'Rezolvă exercițiile indicate la ultima oră.', 'Adu caietul și calculatorul necesar.'],
  'Educația fizică I': ['Pregătește echipamentul sportiv.', 'Verifică ora și locul întâlnirii.'],
  'Limba engleză p.I': ['Repetă vocabularul din ultima lecție.', 'Pregătește tema din manual și caietul de exerciții.'],
  'Analiza matematică I': ['Recapitulează definițiile și formulele importante.', 'Rezolvă exercițiile rămase din tema precedentă.'],
  'Tehnologii Informaționale (TI)': ['Verifică fișierele lucrate la ultima lecție.', 'Adu laptopul și încărcătorul pentru activitatea practică.'],
  'Tehnologii Informaționale': ['Verifică notițele și fișierele lucrate la curs.', 'Pregătește întrebările pentru tema următoare.'],
  'Grafica inginerească': ['Adu instrumentele de desen și caietul.', 'Finalizează planșa începută la ultima ședință.'],
  'Algebra liniară și geometria analitică': ['Recapitulează matricile și operațiile cu vectori.', 'Rezolvă exercițiile indicate în caiet.'],
  'Algebra liniară și geometria analitică (ALGA)': ['Recapitulează matricile și operațiile cu vectori.', 'Adu caietul de seminar și tema rezolvată.'],
  'Bazele energeticii și ingineriei electrice': ['Recapitulează noțiunile din ultimul curs.', 'Pregătește formulele și schema electrică cerută.'],
  'Bazele energeticii și ingineriei electrice (BEIE)': ['Verifică tema de seminar.', 'Recapitulează formulele și conceptele principale.'],
  'Etică și integritate academică': ['Citește materialul indicat pentru seminar.', 'Pregătește un exemplu pentru discuția de la clasă.']
};

function renderSchedule() {
  const days = selectedDay === 'all' ? schedule[selectedWeek] : schedule[selectedWeek].filter((item) => item.day === selectedDay);
  scheduleGrid.innerHTML = days.map(({ day, classes }) => {
    const activeClasses = classes.filter((item) => item[1] !== 'Nu ai pereche');
    const cards = classes.map(([time, name, type, teacher, location]) => {
      const empty = name === 'Nu ai pereche';
      if (empty) {
        return `<article class="class-card is-empty"><div><span class="class-time">${time}</span><p class="empty-label">Nu ai pereche</p></div></article>`;
      }
      return `<article class="class-card" tabindex="0" role="button" data-subject="${name}" data-time="${time}" data-type="${type}" data-teacher="${teacher}" data-location="${location}"><span class="class-time">${time}</span><h3 class="class-name">${name}</h3><div class="class-type">${type}</div>${teacher ? `<div class="class-detail">${teacher}</div>` : ''}${location ? `<div class="class-detail"><strong>${location}</strong></div>` : ''}<span class="prep-hint">Vezi pregătirea <span aria-hidden="true">↗</span></span></article>`;
    }).join('');
    return `<section class="day-column" data-day-column="${day}"><h3 class="day-title">${day}<span class="class-count">${activeClasses.length} cursuri</span></h3>${cards}</section>`;
  }).join('');
}

function openPreparation(card) {
  const subject = card.dataset.subject;
  const tasks = preparation[subject] || ['Verifică notițele din ultima oră.', 'Pregătește caietul și materialele necesare.', 'Adaugă aici cerințele exacte când le primești.'];
  prepTitle.textContent = subject;
  prepSubtitle.textContent = `${card.dataset.time} · ${card.dataset.type}${card.dataset.location ? ` · ${card.dataset.location}` : ''}`;
  prepContent.innerHTML = `<p class="prep-label">Pentru următoarea oră</p><ul>${tasks.map((task) => `<li>${task}</li>`).join('')}</ul>`;
  prepModal.classList.add('is-open');
  prepModal.setAttribute('aria-hidden', 'false');
}

function closePreparation() {
  prepModal.classList.remove('is-open');
  prepModal.setAttribute('aria-hidden', 'true');
}

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const greetingStart = hour >= 5 && hour < 12 ? 'Bună dimineața' : hour >= 12 && hour < 18 ? 'Bună ziua' : 'Bună seara';
  const greetingText = visitorName ? `${greetingStart}, ${visitorName}!` : `${greetingStart}!`;
  greeting.textContent = greetingText;
  currentTime.textContent = now.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' });
  currentDate.textContent = now.toLocaleDateString('ro-RO', { weekday: 'long', day: 'numeric', month: 'long' });
}

visitorNameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = visitorNameInput.value.trim();
  if (!name) return;
  visitorName = name;
  localStorage.setItem('orar-ie-264-name', visitorName);
  updateClock();
});

if (visitorName) visitorNameInput.value = visitorName;

function updateWeekButtons() {
  document.querySelectorAll('.week-button').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.week === selectedWeek);
  });
  weekLabel.textContent = selectedWeek === 'odd' ? 'Impară' : 'Pară';
}

document.querySelectorAll('.week-button').forEach((button) => {
  button.addEventListener('click', () => {
    selectedWeek = button.dataset.week;
    updateWeekButtons();
    renderSchedule();
  });
});

document.querySelectorAll('.day-button').forEach((button) => {
  button.addEventListener('click', () => {
    selectedDay = button.dataset.day;
    document.querySelectorAll('.day-button').forEach((item) => item.classList.toggle('is-active', item === button));
    renderSchedule();
  });
});

scheduleGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.class-card:not(.is-empty)');
  if (card) openPreparation(card);
});

scheduleGrid.addEventListener('keydown', (event) => {
  const card = event.target.closest('.class-card:not(.is-empty)');
  if (card && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    openPreparation(card);
  }
});

prepModal.addEventListener('click', (event) => {
  if (event.target.hasAttribute('data-close-modal')) closePreparation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePreparation();
});

updateWeekButtons();
renderSchedule();
updateClock();
setInterval(updateClock, 30000);
