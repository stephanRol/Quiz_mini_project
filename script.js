'use strict';

const quiz_data = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '56',
        correct: 'c'
    },
    {
        question: 'What was the most used programming language in 2019?',
        a: 'Java',
        b: 'C++',
        c: 'Phyton',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Joe Biden',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Javascript Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    }
]

const questionElem = document.querySelector('#question')
const quiz = document.querySelector('#quiz')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('.submitBtn')

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quiz_data[currentQuestion];
    questionElem.innerText = `Question #${currentQuestion + 1}: \n ${currentQuizData.question}`;

    a_text.innerText = " " + currentQuizData.a;
    b_text.innerText = " " + currentQuizData.b;
    c_text.innerText = " " + currentQuizData.c;
    d_text.innerText = " " + currentQuizData.d;
}

function getSelected() {
    const answerElems = document.querySelectorAll('.answer')
    let answer = undefined;

    answerElems.forEach((answerElem) => {
        if (answerElem.checked) {
            answer = answerElem.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    const answerElems = document.querySelectorAll('.answer')

    answerElems.forEach((answerElem) => {
        answerElem.checked = false;
    });
}

submitBtn.addEventListener('click', () => {


    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quiz_data[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quiz_data.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h1>Quiz finished!</h1>
            <h2>You answered correctly at ${score}/${quiz_data.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`
            quiz.style.display = 'flex';
            quiz.style.flexDirection = 'column';
            quiz.style.justifyContent = 'space-between';
            quiz.style.alignItems = 'center';
            quiz.style.lineHeight = '2';
        }
    }

});