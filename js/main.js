function login() {
    var username = document.querySelector('.username-input')
    var password = document.querySelector('.password-input')
    if (!username.value || !password) return
    localStorage.setItem('currUser', username)
}

var quize = [{
    question: "What is the favorite food for this dinosaur?",
    answers: ['bananas', 'meat', 'leaves'],
    currectAnswer: 2
}, {
    question: "What is the height of the tallest dinosaur?",
    answers: ['2.5m', '7m', '10m'],
    currectAnswer: 3
}]
var currAns = 0
function init() {
    console.log('check');
    document.querySelector('.question').innerText = quize[currAns].question
    document.querySelector('.answer1').innerText = quize[currAns].answers[0]
    document.querySelector('.answer2').innerText = quize[currAns].answers[1]
    document.querySelector('.answer3').innerText = quize[currAns].answers[2]
}
function nextQuestion() {
    if (currAns === 0) currAns++
    else currAns = 0
    init()
}
function checkAns(ev) {
    document.querySelector('.model').style.display = 'block'
    document.querySelector('.answers').style.display = 'none'
    if (ev.target.className.indexOf(quize[currAns].currectAnswer) != -1) {
        document.querySelector('.model').style.backgroundColor = 'green'
        document.querySelector('.model .title').innerText = 'Correct Answer:)'
        setTimeout(() => {
            closeModel()
            nextQuestion()
        }, 2000)
    } else {
        document.querySelector('.model').style.backgroundColor = 'red'
        document.querySelector('.model .title').innerText = 'Wrong Answer:('
        setTimeout(() => {
            closeModel()
        }, 2000)
    }
}
function closeModel() {
    document.querySelector('.model').style.display = 'none'
    document.querySelector('.answers').style.display = 'block'
}
