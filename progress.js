const right = document.getElementById('right-arrow')
const left = document.getElementById('left-arrow')

const prog_val = document.getElementById("progressVal")
const prog = document.getElementById("progress")

const btn1 = document.getElementById("btn1")

const pages = Array.from(document.querySelectorAll(".page"))

function ChangePage(page) {
    pages.forEach(element => {
        element.style.display = 'none'
    });
    pages[page].style.display = 'flex'
}


right.addEventListener('click', function(){
    const current = prog_val.clientWidth
    const full = prog.clientWidth
    const adder = full/14


    if (current === full) {
        right.disabled = true
        return
    } else {
        left.disabled = false
        prog_val.style.width = (current + adder) + "px"
        ChangePage(((current + adder)/full)*14 -1)
        if (prog_val.clientWidth === prog.clientWidth) {
            right.disabled = true
        }
    }
    console.log("hello!")
})

left.addEventListener('click', function() {
    const current = prog_val.clientWidth
    const full = prog.clientWidth
    const adder = full/14

    if (current === 0) {
        left.disabled = true
        return
    } else {
        right.disabled = false
        prog_val.style.width = (current - adder) + "px"
        console.log(((current + adder)/full)*14 -1)
        ChangePage(Math.floor(((current + adder)/full)*14 -1))
        if (prog_val.clientWidth === 0) {
            left.disabled = true
        }
    }
    console.log("hello again!")
})
