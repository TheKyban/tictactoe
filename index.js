let turn = 'X'
let isGame = false
let checkFiled = false
const heading = document.querySelector("h3")
const boxs = document.getElementsByClassName('box')

Array.from(boxs).forEach((box) => {
    box.onclick = () => {
        if (!isGame && box.innerText === '' && !checkFiled) { // checkFilled is under construction

            if (turn == 'X') {
                box.style.color = "rgb(101, 145, 184)"
            } else {
                box.style.color = "rgb(165, 154, 139)"
            }

            box.innerText = turn //updating box 
            musicPlayer("music/click.wav") // click sound
            checkWin() // checking that player has won or not
            if (isGame) {
                heading.innerText = "Hurray! " + turn + " Won"
            }
            checkTurn() // changing turn
            checkFiled() // under construction
        }
    }
})

const checkTurn = () => {
    turn = (turn == 'X' ? 'O' : 'X')
}

const musicPlayer = (path)=> { // music player
    let audio = new Audio(path)
    audio.play()
}

const checkWin = () => {
    const win = [ // win possibility
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach(w => {
        if ((boxs[w[0]].innerText === boxs[w[1]].innerText) && (boxs[w[1]].innerText === boxs[w[2]].innerText) && boxs[w[0]].innerText !== '') {
            console.log("hurry")
            isGame = true
            return;
        }
    })
}

const reset = document.querySelector('input').onclick = () => { // reset button
    Array.from(boxs).forEach(box => {
        box.innerText = ''
    })
    isGame = false
    checkFiled = false
    heading.innerText = "Welcome Again"
}

let checkingFilledFull = () => { // under construction
    const get = (box) => {
        return box.innerText
    }
    if (get(boxs[0]) != '' && get(boxs[1]) != '' && get(boxs[2]) != '' && get(boxs[3]) != '' && get(boxs[4]) != '' && get(boxs[5]) != '' && get(boxs[6]) != '' && get(boxs[7]) != '' && get(boxs[8]) != '') {
        checkFiled = true
        reset()
    }
}