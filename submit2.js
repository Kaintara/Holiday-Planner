const today = new Date().toISOString().slice(0,10)

const start = document.getElementById("start")
start.setAttribute("min",today)
const end = document.getElementById("end")
end.setAttribute("min",today)

const form = document.getElementById('plan')

form.addEventListener('submit', function(event){
    event.preventDefault();
})


const btn2 = document.getElementById('finalbtn2')
const div = document.getElementById('open')

btn2.addEventListener('click', function(){
    form.style.display = 'none'
    div.style.display = 'flex';
    div.style.flexDirection = 'column'
    div.style.backgroundColor = 'rgba(0,0,0,0.25)'
    div.style.backgroundSize = 'cover';
    const load = document.getElementById('loading2')
    load.style.display= "flex"
    load.style.flexDirection = 'column'
    load.style.alignItems = 'center'
    const NewText = document.getElementById('Change2')
    NewText.textContent = "Below should be a draft plan for your holiday!"
    
})