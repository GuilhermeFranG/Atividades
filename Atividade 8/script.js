const showMoreBtn1 = document.getElementById('showMoreBtn1');
const hiddenComputador = document.querySelectorAll('.hidden1');

showMoreBtn1.addEventListener('click', function () {
    hiddenComputador.forEach(Computador => {
        Computador.classList.remove('hidden1');
    });
});

let isExpanded = false;

showMoreBtn1.addEventListener('click', function () {
    hiddenComputador.forEach(Computador => {
        if (!isExpanded) {
            Computador.classList.remove('hidden1');
            showMoreBtn1.textContent = 'Fechar';
        } else {
            Computador.classList.add('hidden1');
            showMoreBtn1.textContent = 'Veja Mais';
        }
    });

    isExpanded = !isExpanded;
});

const showMoreBtn2 = document.getElementById('showMoreBtn2');
const hiddenMonitor = document.querySelectorAll('.hidden2');

showMoreBtn2.addEventListener('click', function () {
    hiddenMonitor.forEach(Monitor => {
        Monitor.classList.remove('hidden2');
    });
});

showMoreBtn2.addEventListener('click', function () {
    hiddenMonitor.forEach(Monitor => {
        if (!isExpanded) {
            Monitor.classList.remove('hidden2');
            showMoreBtn2.textContent = 'Fechar';
        } else {
            Monitor.classList.add('hidden2');
            showMoreBtn2.textContent = 'Veja Mais';
        }
    });

    isExpanded = !isExpanded;
});