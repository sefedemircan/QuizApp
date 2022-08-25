const quizData = [
    {
        question: "Doktorlar dizisinde Ömer karakteri kaçıncı bölümde ölmüştür?",
        a: "67",
        b: "24",
        c: "36",
        d: "45",
        correct: "d",
    },
    {
        question: "Doktorlar dizisindeki Fikret karakterinin oğlunun adı nedir?",
        a: "Efe",
        b: "Hasan",
        c: "Ali",
        d: "Mehmet",
        correct: "b",
    },
    {
        question: "Doktorlar dizisinde karakterlerin sık sık gittiği barın adı nedir?",
        a: "Anestezi",
        b: "Adrenalin",
        c: "Lidokain",
        d: "Bistüri",
        correct: "a",
    },
    {
        question: "Doktorlar dizisinde düğün günü terk edilen karakter?",
        a: "Jülide",
        b: "Ela",
        c: "Zenan",
        d: "Kader",
        correct: "b",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const controlBtn = document.getElementById('control')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


function kontrol(){
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;

    const cvp = document.getElementById("cvp");
    
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            quiz.style.backgroundColor="#32CD32";
        }
        else{
            quiz.style.backgroundColor="#FF3131";
            
            
        }
    }
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;

        }
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;

    quiz.style.backgroundColor="#fff";

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>${score}/${quizData.length} soruyu doğru cevapladınız</h2>

           <button class="btn btn-primary" onclick="location.reload()">Tekrar dene</button>
           `
        }
    }
})
