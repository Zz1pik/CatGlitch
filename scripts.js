let screenshotPanel = document.getElementById("screenshotPanel");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let maxCount = 2
let rightCount = 0
let leftCount = 0

rightBtn.addEventListener('click', ()=> {
    if (rightCount == maxCount){
        screenshotPanel.style.scrollBehavior = "smooth";
        screenshotPanel.scrollLeft = 0;
        rightCount = 0;
    } else {
        screenshotPanel.style.scrollBehavior = "smooth";
        screenshotPanel.scrollLeft += 1020;
        ++rightCount;
    }
});

leftBtn.addEventListener('click', ()=> {
    if (leftCount === maxCount){
        screenshotPanel.style.scrollBehavior = "smooth";
        screenshotPanel.scrollLeft = 0;
        leftCount = 0;
    } else {
        if (screenshotPanel.scrollLeft == 0) {
            screenshotPanel.style.scrollBehavior = "smooth";
            screenshotPanel.scrollLeft += 2040;
            leftCount = 0;
        } else {
            screenshotPanel.style.scrollBehavior = "smooth";
            screenshotPanel.scrollLeft -= 1020;
            ++leftCount;
        }
    }
});