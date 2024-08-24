fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        // Use os dados carregados para iniciar o quiz
        console.log(data);
    });
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    
    let currentQuestionIndex = 0;
    
    const questions = [
        {
            question: 'Qual é a capital da França?',
            answers: [
                { text: 'Paris', correct: true },
                { text: 'Londres', correct: false },
                { text: 'Roma', correct: false },
                { text: 'Berlim', correct: false }
            ]
        },
        {
            question: 'Quem escreveu "Dom Quixote"?',
            answers: [
                { text: 'Miguel de Cervantes', correct: true },
                { text: 'William Shakespeare', correct: false },
                { text: 'Jorge Amado', correct: false },
                { text: 'Gabriel García Márquez', correct: false }
            ]
        },
        {
            question: 'Qual é o maior oceano do mundo?',
            answers: [
                { text: 'Oceano Pacífico', correct: true },
                { text: 'Oceano Atlântico', correct: false },
                { text: 'Oceano Índico', correct: false },
                { text: 'Oceano Ártico', correct: false }
            ]
        },
        {
            question: 'Quem pintou a Mona Lisa?',
            answers: [
                { text: 'Leonardo da Vinci', correct: true },
                { text: 'Vincent van Gogh', correct: false },
                { text: 'Pablo Picasso', correct: false },
                { text: 'Claude Monet', correct: false }
            ]
        },
        {
            question: 'Qual é a fórmula química da água?',
            answers: [
                { text: 'H2O', correct: true },
                { text: 'CO2', correct: false },
                { text: 'O2', correct: false },
                { text: 'N2', correct: false }
            ]
        },
        {
            question: 'Quem foi o primeiro homem a pisar na Lua?',
            answers: [
                { text: 'Neil Armstrong', correct: true },
                { text: 'Buzz Aldrin', correct: false },
                { text: 'Yuri Gagarin', correct: false },
                { text: 'John Glenn', correct: false }
            ]
        },
        {
            question: 'Em que ano começou a Segunda Guerra Mundial?',
            answers: [
                { text: '1939', correct: true },
                { text: '1941', correct: false },
                { text: '1935', correct: false },
                { text: '1945', correct: false }
            ]
        },
        {
            question: 'Qual é o planeta mais próximo do Sol?',
            answers: [
                { text: 'Mercúrio', correct: true },
                { text: 'Vênus', correct: false },
                { text: 'Marte', correct: false },
                { text: 'Terra', correct: false }
            ]
        },
        {
            question: 'Quem descobriu a América?',
            answers: [
                { text: 'Cristóvão Colombo', correct: true },
                { text: 'Pedro Álvares Cabral', correct: false },
                { text: 'Américo Vespúcio', correct: false },
                { text: 'Vasco da Gama', correct: false }
            ]
        },
        {
            question: 'Qual é a moeda oficial do Japão?',
            answers: [
                { text: 'Iene', correct: true },
                { text: 'Yuan', correct: false },
                { text: 'Won', correct: false },
                { text: 'Euro', correct: false }
            ]
        },
        {
            question: 'Qual é o maior país do mundo em área territorial?',
            answers: [
                { text: 'Rússia', correct: true },
                { text: 'Canadá', correct: false },
                { text: 'China', correct: false },
                { text: 'Estados Unidos', correct: false }
            ]
        },
        {
            question: 'Quem é o autor de "Hamlet"?',
            answers: [
                { text: 'William Shakespeare', correct: true },
                { text: 'Charles Dickens', correct: false },
                { text: 'Jane Austen', correct: false },
                { text: 'Mark Twain', correct: false }
            ]
        }
    ];
    
    startBtn.addEventListener('click', startQuiz);
    
    function startQuiz() {
        startScreen.classList.remove('active');
        quizScreen.classList.add('active');
        setNextQuestion();
    }
    
    function setNextQuestion() {
        resetState();
        showQuestion(questions[currentQuestionIndex]);
    }
    
    function showQuestion(question) {
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', selectAnswer);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            answerButtonsElement.appendChild(button);
        });
    }
    
    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }
    
    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct;
        if (correct) {
            alert('Resposta correta!');
        } else {
            alert('Resposta errada!');
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setNextQuestion();
        } else {
            alert('Quiz finalizado!');
            location.reload(); // Recarrega a página para reiniciar o quiz
        }
    }