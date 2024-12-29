// Dokme Haye Cart Ha (Informations)
const buttons = document.querySelectorAll('.card button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const cardInfo = button.parentNode.querySelector('.card-info');
        cardInfo.style.display = cardInfo.style.display === 'none' ? 'block' : 'none';
    });
});