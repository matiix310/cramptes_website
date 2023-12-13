let isRunningAway = true;

function runAway(id) {
    if (isRunningAway) {
        const oldTop = id.style.top;
        const oldLeft = id.style.left;

        id.style.top = (Math.round(Math.random() * (window.innerHeight - id.clientHeight))) + 'px';
        id.style.left = (Math.round(Math.random() * (window.innerWidth - id.clientWidth))) + 'px';

        if (Math.abs(oldTop - id.style.top) < 100 || Math.abs(oldLeft - id.style.left) < 100)
            runAway(id);
    }
}

function stopRunAway() {
    isRunningAway = false;
        document.getElementById('startButton').classList.remove('noHover'); // Réactiver :hover
}

// Désactive :hover lorsque le déplacement est actif
function disableHover() {
    if (isRunningAway) {
        document.getElementById('startButton').classList.add('noHover');
    }
}

// Réactive :hover lorsque le déplacement n'est pas actif
function enableHover() {
    if (!isRunningAway) {
        document.getElementById('startButton').classList.remove('noHover');
    }
}

// Applique les fonctions disableHover et enableHover sur le bouton startButton
document.getElementById('startButton').addEventListener('mouseover', disableHover);
document.getElementById('startButton').addEventListener('mouseout', enableHover);