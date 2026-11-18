

const generateRandomNumber = () => Math.ceil(Math.random() * 6);

const container = document.querySelector("[data-container]");
const gameInfo = document.querySelector("[data-game-info]");
const actionBtn = document.querySelector("[data-action-btn]");

actionBtn.addEventListener("click", () => {
    render();
})

const render = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    container.innerHTML = ""

    container.insertAdjacentHTML("beforeend", `
        <svg class="dice dice-red">
          <use href="./sprites.svg#dice-${player1}-icon"></use>
        </svg>
        <svg class="dice dice-blue">
          <use href="./sprites.svg#dice-${player2}-icon"></use>
        </svg>
    `)

    gameInfo.classList.remove("pop");
    void gameInfo.offsetWidth; 
    gameInfo.classList.add("pop");
    if (player1 === player2) {
        gameInfo.textContent = "🤝 Ничья"
        gameInfo.style.color = "#64748b"
    } else if (player1 > player2) {
        gameInfo.textContent =  "🏆 Победил игрок 1"
        gameInfo.style.color = "#ef4444"
    } else {
        gameInfo.textContent =  "🏆 Победил игрок 2"
        gameInfo.style.color = "#3b82f6"
    }
}
render()