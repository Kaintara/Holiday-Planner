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
    NewText.textContent = ""
    const SavedData = sessionStorage.getItem("UserInput")
        if (SavedData) {
            const start = document.getElementById('start')
            const end = document.getElementById('end')
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
                countrycity: CountryCity,
                Starting_Date: start.value,
                Ending_Date: end.value,
                Group: SavedData['Group'],
                Budget: SavedData['Budget'],
                Accom: accom,
                Activ: activ,
                Avoid: avoid.value,
                Must: [must.value,SavedData['AddNotes']]
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
        }
        fetch ('https://ai.hackclub.com/chat/completions', {
            method: 'POST',
            headers: { "Content-Type": 'application/json'},
            body: JSON.stringify({"messages":[{"role": "user", "content": `
                You are an AI travel planner. Using the following user data:

Visting Country and City: (${userData.Country} and ${userData.}) and or ${userData.CountryCity},
Starting_Date: ${userData.Starting_Date},
Ending_Date: ${userData.Ending_Date},
Group: ${userData.Group},
Budget: ${userData.Budget},
Accom: ${userData.Accom},
Activ: ${userData.Activ},
Avoid: ${userData.Avoid},
Must: ${userData.Must}


Generate a complete holiday itinerary in JSON format only (no extra text). Follow these exact guidelines:

Top Accommodations Section:

Include the top three accommodations in the selected city and country.

Filter based on the budget and accommodation preference (Accom).

If no details are provided, use generic/popular hotels or stays suitable for the average tourist budget.

Each accommodation should include:

- name

- type

- price_range

- rating

- location

- description

Itinerary Section:

Create a daily plan covering every day between Starting_Date and Ending_Date.

For each day, include:

- date

- activities (at least one per day based on the user’s interests in Activ)

- location or area for the activity

- description

- notes for travel times, meals, or optional events

Consider arrival and departure days — include travel time and light or rest activities accordingly.

Check for any festivals or events happening in that city or country during those dates and include them if relevant.

Priority Handling:

Put strong emphasis on:

Things to avoid (Avoid) — these must not appear anywhere in the plan.

Things that are a must (Must) — these must definitely appear at least once, ideally highlighted or emphasized.

Defaults and Fallbacks:

If any field in the input is blank or missing, use default or most popular options for that location.

If no activities are given, use sightseeing, local food experiences, and nature visits.

If no budget is given, assume a mid-range plan.

If no accommodation type is given, use a mix of 3-star hotels.

JSON Structure Example (for format reference only, add more accommodations and dates if possible):
{
"accommodations": [
    {
    "name": "Hotel Sakura Shinjuku",
    "type": "3-star hotel",
    "price_range": "$$",
    "rating": 4.3,
    "location": "Shinjuku, Tokyo",
    "description": "Modern hotel close to train station with breakfast included."
    }],
"itinerary": [
{
    "date": "2025-09-10",
    "activities": [
    {
        "name": "Arrival & Local Dinner",
        "location": "Shinjuku",
        "description": "Arrive in Tokyo, check into hotel, and enjoy a casual dinner nearby.",
        "notes": "Get early flight tickets to avoid rush hour periods in Tokyo.",}]
    }]
}

Additional Instructions:

Ensure all text values are human-readable and descriptive (not placeholders).

Be sure to write LONG detailed descriptions, the examples are too short, only for formatting purposes. This includes both the activities and hotel descriptions!

VERY IMPORTANT!!! DO NOT SKIP ANY DATES - Generate AT LEAST one thing per day!!

The output must be valid JSON that can be parsed directly into a JavaScript object.

Do not include explanations, markdown, or extra formatting — JSON only. THIS IS KEY - give output as format given ONLY.
                
                `}]}),}).then(result => result.json())
    .then(eventsResponse =>{
        const events = eventsResponse.choices[0].message.content
        const important = events.split('</think>')[1]?.trim()
        console.log(important)
        const Plan = JSON.parse(important)
        load.style.display= "none"
        const T = document.getElementById('title')
        T.textContent = "Draft Holiday Plan!" 

        for (let i = 0; i < 3; i++) {
            const hot = document.getElementById(`hot${i+1}`)
            hot.textContent = Plan["accommodations"][i]["name"]
            const Typehot = document.getElementById(`Typehot${i+1}`)
            Typehot.textContent = `Type: ${Plan["accommodations"][i]["type"]}`
            const Rathot = document.getElementById(`Rathot${i+1}`)
            Rathot.textContent= `Rating: ${Plan["accommodations"][i]["rating"]}`
            const Prihot = document.getElementById(`Prihot${i+1}`)
            Prihot.textContent = `Price: ${Plan["accommodations"][i]["price_range"]}`
            const Lothot = document.getElementById(`Lothot${i+1}`)
            Lothot.textContent = `Location: ${Plan["accommodations"][i]["location"]}`
            const Deshot = document.getElementById(`Deshot${i+1}`)
            Deshot.textContent = Plan["accommodations"][i]["description"]
        }
        const Itinerary = Plan["itinerary"]
        const Contain = document.getElementById('bigact')
        console.log(Itinerary)
        Itinerary.forEach((day,index) => {
            var actbox = document.createElement('div')
            actbox.setAttribute("class","actbox")
            Contain.appendChild(actbox)
            var act = document.createElement('h2')
            act.setAttribute("class","act")
            const datee = day["date"]
            const namee = day["activities"][0]["name"]
            act.textContent = (`Day ${index + 1}: ${namee} (${datee})`)
            actbox.appendChild(act)
            var smallact = document.createElement('h3')
            smallact.setAttribute("class","smallact")
            const loc = day["activities"][0]["location"]
            smallact.textContent = (`Location: ${loc}`)
            actbox.appendChild(smallact)
            var evensmalleract1 = document.createElement('p')
            evensmalleract1.setAttribute("class","evensmalleract")
            const descript = day["activities"][0]["description"]
            evensmalleract1.textContent = descript
            actbox.appendChild(evensmalleract1)
            var evensmalleract2 = document.createElement('p')
            evensmalleract2.setAttribute("class","evensmalleract")
            const descript2 = day["activities"][0]["notes"]
            evensmalleract2.textContent = descript2
            actbox.appendChild(evensmalleract2)
        })
    })
        })