let screenshotPanel = document.getElementById("screenshotPanel");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let images = document.querySelectorAll(".gallery img");
let imageWidth = 1020; 
let numberOfImages = images.length;

function updateScrollPosition(newIndex) {
    let newScrollPosition = newIndex * imageWidth;
    screenshotPanel.scrollLeft = newScrollPosition;
}

function getCurrentIndex() {
    return Math.round(screenshotPanel.scrollLeft / imageWidth);
}

rightBtn.addEventListener('click', () => {
    let currentIndex = getCurrentIndex();
    let newIndex = currentIndex + 1;
    if (newIndex >= numberOfImages) {
        newIndex = 0;
    }
    updateScrollPosition(newIndex);
});

leftBtn.addEventListener('click', () => {
    let currentIndex = getCurrentIndex();
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = 3;
    }
    updateScrollPosition(newIndex);
});


document.addEventListener('DOMContentLoaded', () => {
    let robot = document.getElementById('robot');
    let moveDistance = 2;
    let position = 0;
    let moveRight = true;

    function moveRobot() {
        let parentWidth = robot.parentElement.offsetWidth - 28;
        let robotWidth = robot.offsetWidth;

        if (moveRight) {
            position += moveDistance;
            if (position >= (parentWidth - robotWidth)) {
                moveRight = false;
                flip();
            }
        } else {
            position -= moveDistance;
            if (position <= 0) {
                moveRight = true;
                flip();
            }
        }

        robot.style.left = position + 'px';
    }

    robot.addEventListener('click', () => {
        moveDistance += 0.2; 
    
        console.log(moveDistance)
    });

    setInterval(moveRobot, 5);
});

function flip() {
    if (robot.style.transform === 'scaleX(1)') {
        robot.style.transform = 'scaleX(-1)'; 
    } else {
        robot.style.transform = 'scaleX(1)'; 
    }
}