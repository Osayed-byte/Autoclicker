document.addEventListener('DOMContentLoaded', (event) => {
    const chest = document.getElementById('chest');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');

    chest.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
