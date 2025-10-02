const right = document.getElementById('right-arrow')
const left = document.getElementById('left-arrow')

const prog_val = document.getElementById("progressVal")
const prog = document.getElementById("progress")

const btn1 = document.getElementById("btn1")

const pages = Array.from(document.querySelectorAll(".page"))
pages.forEach(el => console.log(el))
pages[0].style.display = 'flex'

let pgnum = 0
const totalpages = pages.length - 1

function ChangePage(pgnum) {
    pages.forEach(element => {
        element.style.display = 'none'
    });
    pages[pgnum].style.display = 'flex'
}

function Changeprog() {
    const full = prog.clientWidth
    const adder = full/totalpages
    prog_val.style.width = (pgnum * adder) + "px"

    left.disabled = (pgnum === 0)
    right.disabled = (pgnum === totalpages)
}


right.addEventListener('click', function(){
    console.log(pgnum)
    if (pgnum !== totalpages) {
        pgnum++
        ChangePage(pgnum)
        Changeprog()
    }
})

left.addEventListener('click', function() {
    console.log(pgnum)
    if (pgnum !== 0) {
        pgnum--
        ChangePage(pgnum)
        Changeprog()
    }
})
