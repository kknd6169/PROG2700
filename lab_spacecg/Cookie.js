let score = 0;
let unlockedObjects = [];
let clickCount = { planet: 0, rocket: 0, alien: 0, star: 0 }; // Track clicks for each object

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (!unlockedObjects.includes(object) && score >= getUnlockScore(object)) {
        unlockedObjects.push(object);
        const objElement = document.getElementById(object);
        objElement.classList.add('unlocked');
        objElement.onclick = function() {
            this.classList.add('clicked');
            clickCount[object]++;
            checkSpecialUnlock();
        };
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
}

function checkUnlockables() {
    unlockObject('planet', 3); // Requires 3 clicks
    unlockObject('rocket', 7); // Requires 7 clicks
    unlockObject('alien', 10); // Requires 10 clicks
}

function checkSpecialUnlock() {
    // Check if all have been clicked at least once and then unlock star
    if (clickCount.planet > 0 && clickCount.rocket > 0 && clickCount.alien > 0 && !unlockedObjects.includes('star')) {
        document.getElementById('star').style.display = 'block'; // Show the star
        unlockObject('star');
    }
}

function getUnlockScore(object) {
    switch(object) {
        case 'planet': return 3;
        case 'rocket': return 7;
        case 'alien': return 10;
        case 'star': return 0; // No specific score needed, just the action of unlocking others
        default: return Infinity; // Default case to prevent unlocking unknown objects
    }
}
