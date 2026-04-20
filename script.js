    const message = document.querySelector(".messege");
    const timer = document.querySelector(".timer");
    const cat = document.querySelector(".cat-gif");
    const workButton = document.querySelector(".mode-work");
    const breakButton = document.querySelector(".mode-break");

    function showWork() {
        workButton.classList.add("active");
        workButton.classList.remove("inactive");

        breakButton.classList.add("inactive");
        breakButton.classList.remove("active");

        message.textContent = "YOU CAN DO IT";
        timer.textContent = "25:00";
        cat.src = "assets/pomodoro/cat-idle.gif";
    }

    function showBreak() {
        breakButton.classList.add("active");
        breakButton.classList.remove("inactive");

        workButton.classList.add("inactive");
        workButton.classList.remove("active");

        message.textContent = "TAKE A BREAK";
        timer.textContent = "05:00";
        cat.src = "assets/pomodoro/cat-break.gif";
    }