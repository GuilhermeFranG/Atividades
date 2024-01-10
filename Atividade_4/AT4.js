const forclick = document.getElementById('forclick');

forclick.addEventListener('click', function () {
    isClicked = !isClicked;

    if (isClicked) {
        forclick.classList.add('active');
    } else {
        forclick.classList.remove('active');
    }
});

let isClicked = false;