var CountryCity = 'null'

function spl(el) {
    const parts = (el.textContent).split(/\s*[-,|]\s*/);
    Count = parts[0].trim();
    Cit = parts[1].trim();

    const CC = {
        Count1: Count,
        Cit1: Cit
    }
    return CC
}

const btn = document.getElementById("btn1")
const R = document.getElementById('right-arrow')
const startbtn = [btn,R]

const bt1 = document.getElementById('bt1')
const bt2 = document.getElementById('bt2')
const bt3 = document.getElementById('bt3')

startbtn.forEach(b => {
    b.addEventListener('click', function(){
        const SavedData = sessionStorage.getItem("UserInput")
        if (SavedData) {
            const userData = JSON.parse(SavedData);
            console.log(userData);
            const hide = document.getElementById("nodata")
            hide.style.display = 'none'
            bt1.textContent = userData['Choice1']
            bt2.textContent = userData['Choice2']
            bt3.textContent = userData['Choice3']
            const radio = document.getElementsByName('Group')
            radio.forEach(el => {
                if (el.title === userData['Group']) {
                    el.checked = true
                }})
            const radio2 = document.getElementsByName('Budget')
            radio2.forEach(el => {
                if (el.title === userData['Budget']) {
                    el.checked = true
                }})
        } else {
            const hide2 = document.getElementById("data")
            hide2.style.display = 'none'
    }
})
})

bt1.addEventListener('click', function(){
    sessionStorage.setItem("CountryCity",JSON.stringify(spl(bt1)));
    pgnum++
    ChangePage()
    Changeprog()
})

bt2.addEventListener('click', function(){
    sessionStorage.setItem("CountryCity",JSON.stringify(spl(bt2)));
    pgnum++
    ChangePage()
    Changeprog()
})

bt3.addEventListener('click', function(){
    sessionStorage.setItem("CountryCity",JSON.stringify(spl(bt3)));
    pgnum++
    ChangePage()
    Changeprog()
})


