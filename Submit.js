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
    const slider2Value = temps[Number(slider2.value) - 1];
    const slider3Value = dis[Number(slider3.value) - 1];
    const slider4Value = saf[Number(slider4.value) - 1];
    const slider5Value = type[Number(slider5.value) - 1];
    const slider6Value = food[Number(slider6.value) - 1];
    const slider7Value = days[Number(slider7.value) - 1];
    var Bud = ''
    const Buds = document.getElementsByName('Budget') 
    Buds.forEach(radio => {
        if (radio.checked) {
            Bud = radio.title
        }
    })
    var Grp = ''
    const Grps = document.getElementsByName('Group') 
    Grps.forEach(radio => {
        if (radio.checked) {
            Grp = radio.title
        }
    })
    
    const UserInput = {
        User_Country: country.textContent,
        User_City: city.textContent,
        Budget: Bud,
        Area: slider1Value,
        Weather: slider2Value,
        Distance: slider3Value,
        Safety: slider4Value,
        Type: slider5Value,
        Food: slider6Value,
        Group: Grp,
        Days: slider7Value,
        AddNotes: Notes.textContent,
    }

  console.log(UserInput.Budget)

    fetch ('https://ai.hackclub.com/chat/completions', {
        method: 'POST',
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify({"messages":[{"role": "user", "content": "Tell me a joke Return ONLY a JSON object with keys 'joke' and 'category'. Do NOT include any extra text."}]}),
    }).then(result => result.json())
    .then(eventsResponse =>{
        const events = eventsResponse.choices[0].message.content

        console.log(events)
    })
    
})
