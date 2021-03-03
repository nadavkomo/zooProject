function login(ev) {
    ev.preventDefault()
    var username = document.querySelector('.username-input')
    var password = document.querySelector('.password-input')
    if (!username.value || !password.value) {
        document.querySelector('.login .error').innerText = 'Username / Password required!'
        setTimeout(() => {
            document.querySelector('.login .error').innerText = ''
        }, 3000)
    } else {
        currStation = 0
        localStorage.setItem('currUser', username.value)
        document.querySelector('.main .title').innerText = 'Hi ' + username.value + ', enjoy!'
        document.querySelector('.status').innerText = `${currStation}/${stations.length} stations`
        document.querySelector('.login').style.display = 'none'
        document.querySelector('.main').style.display = 'block'
    }
}

function startStation() {
    if (currStation === stations.length) toEnd()
    else {
        document.querySelector('.main').style.display = 'none'
        document.querySelector('.station').style.display = 'block'
        init()
    }
}
var stations = [
    {
        url: "./glb/RobotExpressive.glb",
        quize: [{
            question: "What is the favorite food for this dinosaur?",
            answers: ['bananas', 'meat', 'leaves'],
            currectAnswer: 2
        }, {
            question: "What is the height of the tallest dinosaur?",
            answers: ['2.5m', '7m', '10m'],
            currectAnswer: 3
        }],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolorum voluptatum, laborum praesentium corporis accusantium, voluptas excepturi facere esse impedit cum ipsa quaerat distinctio magni, recusandae nam nulla repellendus sapiente.',
    },
    {
        url: "./glb/Wolf-Blender.glb",
        quize: [{
            question: "What is the favorite food for this dinosaur?",
            answers: ['bananas', 'meat', 'leaves'],
            currectAnswer: 2
        }, {
            question: "What is the height of the tallest dinosaur?",
            answers: ['2.5m', '7m', '10m'],
            currectAnswer: 3
        }],
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolorum voluptatum, laborum praesentium corporis accusantium, voluptas excepturi facere esse impedit cum ipsa quaerat distinctio magni, recusandae nam nulla repellendus sapiente.',
    }
]
// var quize = [{
//     question: "What is the favorite food for this dinosaur?",
//     answers: ['bananas', 'meat', 'leaves'],
//     currectAnswer: 2
// }, {
//     question: "What is the height of the tallest dinosaur?",
//     answers: ['2.5m', '7m', '10m'],
//     currectAnswer: 3
// }]
var currStation = 0
var currAns
function init() {
    currAns = 0
    document.getElementById('model1').src = stations[currStation].url
    document.getElementById('model2').src = stations[currStation].url
    document.querySelector('.description').style.display = 'block'
    document.querySelector('.desc-title').style.display = 'block'
    document.querySelector('.next-btn').style.display = 'block'
    document.querySelector('.answers').style.display = 'none'
    document.querySelector('.question').style.display = 'none'
    document.querySelector('.description').innerText = stations[currStation].description
}
function toQuiz() {
    document.querySelector('.answers').style.display = 'block'
    document.querySelector('.question').style.display = 'block'
    document.querySelector('.description').style.display = 'none'
    document.querySelector('.desc-title').style.display = 'none'
    document.querySelector('.next-btn').style.display = 'none'
    document.querySelector('.question').innerText = stations[currStation].quize[currAns].question
    document.querySelector('.answer1').innerText = stations[currStation].quize[currAns].answers[0]
    document.querySelector('.answer2').innerText = stations[currStation].quize[currAns].answers[1]
    document.querySelector('.answer3').innerText = stations[currStation].quize[currAns].answers[2]
}

function toMain() {
    currStation++
    document.querySelector('.status').innerText = `${currStation}/${stations.length} stations`
    document.querySelector('.station').style.display = 'none'
    document.querySelector('.main').style.display = 'block'
}

function toEnd() {
    document.querySelector('.main').style.display = 'none'
    document.querySelector('.station').style.display = 'none'
    document.querySelector('.finish').style.display = 'block'
    document.querySelector('.finish h1').innerText = localStorage.getItem('currUser') + ', ' + document.querySelector('.finish h1').innerText
}

function toLogin() {
    document.querySelector('.main').style.display = 'none'
    document.querySelector('.finish').style.display = 'none'
    document.querySelector('.login').style.display = 'block'
    document.querySelector('.username-input').value = ''
    document.querySelector('.password-input').value = ''
}

function nextQuestion() {
    if (currAns < stations[currStation].quize.length - 1) {
        currAns++
        toQuiz()
    } else {
        toMain()
    }
}
function checkAns(ev) {
    document.querySelector('.model').style.display = 'block'
    document.querySelector('.answers').style.display = 'none'
    if (ev.target.className.indexOf(stations[currStation].quize[currAns].currectAnswer) != -1) {
        document.querySelector('.model').style.backgroundColor = 'green'
        document.querySelector('.model .title').innerText = 'Correct Answer:)'
        setTimeout(() => {
            if (document.querySelector('.model').style.display === 'none') return
            closeModel()
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
    nextQuestion()
}
