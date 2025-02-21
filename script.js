let names = [];

const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const drawButton = document.getElementById('drawButton');
const result = document.getElementById('result');

addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        nameInput.value = '';
        alert(`Dodano: ${name}`);
    } else {
        alert('Wpisz imię!');
    }
});

drawButton.addEventListener('click', () => {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const winner = names[randomIndex];
        result.textContent = `Wylosowana osoba: ${winner}`;
    } else {
        result.textContent = 'Brak osób do wylosowania!';
    }
});
