const form = document.getElementById('Holiday')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const container = document.querySelector('.Disappear')
    container.style.display = 'none';
    const NewText = document.getElementById('Change')
    NewText.textContent = "Below should be your Top 3 trip destinantions! It takes some time to generate so hang tight."
    const country = document.getElementById('cont')
    const city = document.getElementById('city')
    const Notes = document.getElementById('add')
    const slider1Value = areas[Number(slider1.value) - 1];
    const slider2Value = temps[Number(slider1.value) - 1];
    const slider3Value = dis[Number(slider1.value) - 1];
    const slider4Value = saf[Number(slider1.value) - 1];
    const slider5Value = type[Number(slider1.value) - 1];
    const slider6Value = food[Number(slider1.value) - 1];
    const slider7Value = days[Number(slider1.value) - 1];
    const Bud = ''
    const Buds = document.getElementsByName('Budget') 
    Buds.forEach(radio => {
        if (radio.checked) {
            Bud = radio.textContent
        }
    })
    const Grp = ''
    const Grps = document.getElementsByName('Group') 
    Grps.forEach(radio => {
        if (radio.checked) {
            Grp = radio.textContent
        }
    })
    
    const UserInput = {
        User_Country: country,
        User_City: city,
        Budget: Bud,
        Area: slider1Value,
        Weather: slider2Value,
        Distance: slider3Value,
        Safety: slider4Value,
        Type: slider5Value,
        Food: slider6Value,
        Group: Grp,
        Days: slider7Value,
        AddNotes: Notes,
    }
    
})
