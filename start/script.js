// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

// ***** SCROLL EVENT *****
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Bisogna fare riferimento alla finestra e allo scroll sul suo asse Y (vert)
    console.log(window.scrollY);
if (window.scrollY >= 100) {
    header.classList.add('scrolled')
} else {
        header.classList.remove('scrolled');
}
});
