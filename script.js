const countValue = document.getElementById('count');

const increaseBtn = document.getElementById('increase');

const decreaseBtn = document.getElementById('decrease');

const ResetBtn = document.getElementById('Reset');

// initial value 

let count = 0;

// increase 

increaseBtn.addEventListener('click', () => {
    count++;
    countValue.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
    count--;
    countValue.textContent = count;
});

ResetBtn.addEventListener('click', () => {
    count = 0;
    countValue.textContent = count;
});
