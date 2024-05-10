const forclick = document.getElementById('forclick');
const Animation = document.getElementById('Animation')

const messageElement = document.createElement('p');
messageElement.textContent = 'Clique em mim';
messageElement.classList.add('anime-click')
Animation.appendChild(messageElement);

forclick.addEventListener('click', function () {
    isClicked = !isClicked;

    if (isClicked) {
        forclick.classList.add('active');
    } else {
        forclick.classList.remove('active');
    }
});

Animation.addEventListener('click', function () {
    isClicked = true;

    if (isClicked) {
    messageElement.style.display = 'none';
    Animation.classList.add('active');

    setTimeout(() => {
        Animation.classList.remove('active');}, 8000);
    }
})

let isClicked = false;