const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.nav-toggle');
const btn = document.querySelector('i');
const links = document.querySelectorAll('a');

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        btn.classList.remove('bi-list');
        btn.classList.add('bi-x-lg');
    } else if (visibility === 'true') {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        setTimeout(() => {
            btn.classList.remove('bi-x-lg');
            btn.classList.add('bi-list');
        }, 600);
    }
});
links.forEach(link => {
    link.addEventListener('click', () => {
        const visibility = nav.getAttribute('data-visible');
        if (visibility === 'true') {
            nav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
            setTimeout(() => {
                btn.classList.remove('bi-x-lg');
                btn.classList.add('bi-list');
            }, 600);
        }
    })
})