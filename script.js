const startGameButton = document.querySelector(".start-quiz");
const difficultyContainer = document.querySelector(".difficulty-container");
const questionsContainer = document.querySelector(".question-container");
const questionText = document.querySelector(".question");
const answersContainer = document.querySelector(".answer-container");
const difficultyButtons = document.querySelectorAll(".difficulty");
const instructionsButton = document.querySelector(".instructions");
const closeModalButton = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const title = document.getElementById("title");
const container = document.getElementById("container");
const questionAnswer = document.querySelector(".questionAnswer");

startGameButton.addEventListener("click", showDifficultyOptions);
difficultyButtons.forEach(button => button.addEventListener("click", selectDifficulty));
instructionsButton.addEventListener("click", showInstructions);
closeModalButton.addEventListener("click", closeInstructions);

function showInstructions() {
    modal.classList.remove("hide");
    modal.style.display = "flex";
}

function closeInstructions() {
    modal.classList.add("hide");
    modal.style.display = "none";
}

let currentQuestionIndex = 0;
let totalCorrect = 0;
let questions = [];

function showDifficultyOptions() {
    startGameButton.classList.add("hide");
    questionsContainer.classList.add("hide");
    difficultyContainer.classList.remove("hide");
    instructionsButton.classList.add("hide");
    document.querySelectorAll('.macaco').forEach(macaco => {
        macaco.classList.add('hide');
    });
}

function selectDifficulty(event) {
    if (event.target.classList.contains("difficulty")) {
        const difficulty = event.target.dataset.difficulty;
        switch (difficulty) {
            case "easy":
                questions = questions_easy;
                break;
            case "medium":
                questions = questions_normal;
                break;
            case "hard":
                questions = questions_hard;
                break;
        }
        difficultyContainer.classList.add("hide");
        questionsContainer.classList.remove("hide");
        title.classList.add("hide")
        container.classList.add("hide")
        questionAnswer.classList.remove("hide")
        
        startGame();
    }
}

function startGame() {
    currentQuestionIndex = 0;
    totalCorrect = 0;
    displayNextQuestion();
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

function displayNextQuestion() {
    resetState();

    if (questions.length === currentQuestionIndex) {
        return finishGame();
    }

    questionText.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button");
        newAnswer.classList.add("answer");
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        answersContainer.appendChild(newAnswer);
        newAnswer.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;

    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true;
    });

    if (correct) {
        selectedButton.classList.add("correct");
        totalCorrect++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    setTimeout(() => {
        currentQuestionIndex++;
        displayNextQuestion();
    }, 1000); 
}

function finishGame() {
    const totalQuestions = questions.length;
    const performance = Math.floor((totalCorrect / totalQuestions) * 100);

    let message;
    if (performance === 100) {
        message = "Excelente! Você acertou todas as perguntas!";
    } else if (performance >= 70) {
        message = `Muito bem! Você acertou ${totalCorrect} de ${totalQuestions} perguntas.`;
    } else {
        message = `Você acertou ${totalCorrect} de ${totalQuestions} perguntas. Continue praticando!`;
    }

    questionsContainer.innerHTML = `
        <div class="final-message">
            <span>${message}</span>
            <button onclick="window.location.reload()" class="btn-end">Recomeçar</button>
        </div>
    `;
}