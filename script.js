const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "owkayy lets meet at my minecraft world that i made at 6pm its called LoveVille.";
    gif.src = "https://imgs.search.brave.com/8XSUdJu0RJX4LKPuyYMrTcMIpnxcyq7RxLCuGzBPExQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvY3V0ZS1j/YXQteW91LXJlLWN1/dGUtejc2aHhpOGo3/cTFtc3NwaS5naWY.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
  
    const maxLeft = wrapperRect.width - noBtn.offsetWidth;
    const maxTop = wrapperRect.height - noBtn.offsetHeight;
  
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;
  
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomLeft}px`;
    noBtn.style.top = `${randomTop}px`;
  ;

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
