// Alternância de Tema Escuro / Claro
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Modo Claro';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Modo Escuro';
    }
});

// Navegação SPA
function showPerson(personId) {
    document.querySelector('.cards-grid').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');

    const bios = document.querySelectorAll('.bio-content');
    bios.forEach(bio => bio.classList.add('hidden'));

    document.getElementById(personId + '-content').classList.remove('hidden');
    window.scrollTo({ top: 120, behavior: 'smooth' });
}

function hideDetail() {
    document.getElementById('detail-view').classList.add('hidden');
    document.querySelector('.cards-grid').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
