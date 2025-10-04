const today = new Date().toISOString().slice(0,10)

const start = document.getElementById("start")
start.setAttribute("min",today)
const end = document.getElementById("end")
end.setAttribute("min",today)

start.addEventListener('change',function(event){
    end.setAttribute("min",event.target.value)
})

const form = document.getElementById('plan')

form.addEventListener('submit', function(event){
    event.preventDefault();
})


const btn2 = document.getElementById('finalbtn2')
const div = document.getElementById('open')

var userData = {}

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
    const SavedData = sessionStorage.getItem("UserInput")
        if (SavedData) {
            userData = {

            }
        } else {
            const country = document.getElementById('cont2')
            const city = document.getElementById('city2')
            const start = document.getElementById('start')
            const end = document.getElementById('end')
            var Grp = ''
            const Grps = document.getElementsByName('Group') 
            Grps.forEach(radio => {
                if (radio.checked) {
                    Grp = radio.title
                }})
            var Bud = ''
            const Buds = document.getElementsByName('Budget') 
            Buds.forEach(radio => {
            if (radio.checked) {
                Bud = radio.title
                }})
            var accom = ''
            const accoms = document.getElementsByName('Accom') 
            accoms.forEach(radio => {
            if (radio.checked) {
                accom = radio.title
                }})
            var activ = []
            const activs = document.getElementsByName('Activ') 
            activs.forEach(radio => {
            if (radio.checked) {
                activ.push(radio.title)
                }})
            const avoid = document.getElementById('avoid')
            const must = document.getElementById('must')
            userData = {
                Country: country.value,
                City: city.value,
                Starting_Date: start.value,
                Ending_Date: end.value,
                Group: Grp,
                Budget: Bud,
                Accom: accom,
                Activ: activ,
                Avoid: avoid.value,
                Must: must.value,
            }
            console.log(userData)    
        }
    
})