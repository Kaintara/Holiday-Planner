const right = document.getElementById('right-arrow')
const left = document.getElementById('left-arrow')

const prog_val = document.getElementById("progressVal")
const prog = document.getElementById("progress")

const btn1 = document.getElementById("btn1")

const pages = Array.from(document.querySelectorAll(".page"))
const btns = Array.from(document.querySelectorAll(".nxtpg"))

let pgnum = 0
const totalpages = pages.length - 1

function ChangePage() {
    pages.forEach(element => {
        element.style.display = 'none'
    });
    pages[pgnum].style.display = 'flex'
    pages[pgnum].style.flexDirection = 'column'
    pages[pgnum].style.alignItems = 'center'
}

function Changeprog() {
    const full = prog.clientWidth
    const adder = full/totalpages
    prog_val.style.width = (pgnum * adder) + "px"

    left.disabled = (pgnum === 0)
    right.disabled = (pgnum === totalpages)
}


right.addEventListener('click', function(){
    if (pgnum !== totalpages) {
        pgnum++
        ChangePage()
        Changeprog()
    }
})

left.addEventListener('click', function() {
    if (pgnum !== 0) {
        pgnum--
        ChangePage()
        Changeprog()
    }
})

btn1.addEventListener('click', function() {
    pgnum++
    ChangePage()
    Changeprog()
})

btns.forEach(el => {
    el.addEventListener('click', function() {
    pgnum++
    ChangePage()
    Changeprog()
})
})