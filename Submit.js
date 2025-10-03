const container2 = document.querySelector('.Appear')
container2.style.display = 'none'
const form = document.getElementById('form')
const but = document.getElementById('save')

const btn = document.getElementById('finalbtn')

btn.addEventListener('click', function() {
  form.style.display = 'none'
  container2.style.display = 'flex';
  container2.style.flexDirection = 'column'
  const NewText = document.getElementById('Change')
    NewText.textContent = "Below should be your Top 3 trip destinations!"
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
        User_Country: country.value,
        User_City: city.value,
        Budget: Bud,
        Area: slider1Value,
        Weather: slider2Value,
        Distance: slider3Value,
        Safety: slider4Value,
        Type: slider5Value,
        Food: slider6Value,
        Group: Grp,
        Days: slider7Value,
        AddNotes: Notes.value,
    }

    fetch ('https://ai.hackclub.com/chat/completions', {
        method: 'POST',
        headers: { "Content-Type": 'application/json'},
        body: JSON.stringify({"messages":[{"role": "user", "content": `YOU ARE A TRAVEL RECOMMENDATION AI. BASED ON THE USER'S INPUTS, OUTPUT THREE COUNTRIES RANKED FROM BEST TO LAST FOR THEIR NEXT TRIP. CONSIDER ALL 11 FACTORS IN YOUR DECISION. 

USER SELECTED PREFERENCES:
- USER COUNTRY AND CITY: ${UserInput.User_City}, ${UserInput.User_Country}
- BUDGET: ${UserInput.Budget}
- AREA PREFERENCE: ${UserInput.Area}
- WEATHER PREFERENCE: ${UserInput.Weather}
- DISTANCE FROM HOME: ${UserInput.Distance}
- TYPE OF HOLIDAY: ${UserInput.Type}
- SAFETY PRIORITY: ${UserInput.Safety}
- FOOD IMPORTANCE: ${UserInput.Food}
- ACCOMPANIMENT: ${UserInput.Group}
- DURATION OF STAY: ${UserInput.Days}
- ADDTIONAL NOTES: ${UserInput.AddNotes}

ALL AVAILABLE OPTIONS FOR COMPARISON:
- BUDGET: LESS THAN 100, BUDGET FRIENDLY, AVERAGE COSTS, ABOVE AVERAGE
- AREA: INNER CITY, GREEN URBAN, BALANCED, NATURE-FOCUSED TOWNS, REMOTE NATURE
- WEATHER: VERY HOT, MILD HEAT, COOL, CHILLY, FREEZING
- DISTANCE: LOCAL, BORDERING COUNTRIES, SAME CONTINENT, ADJACENT CONTINENTS, ANYWHERE
- HOLIDAY TYPE: COMPLETE RELAXATION, MOSTLY RELAXING, BALANCED, MOSTLY ADVENTURE, COMPLETE ADVENTURE
- SAFETY: TOP PRIORITY, 4, MID PRIORITY, 2, LOWEST PRIORITY
- FOOD IMPORTANCE: TOP PRIORITY, 4, MID PRIORITY, 2, LOWEST PRIORITY
- ACCOMPANIMENT: NO-ONE, FAMILY - ADULT ONLY, FAMLIY, FRIENDS, PARTNER
- DURATION: ONE DAY, COUPLE OF DAYS, ONE WEEK, COUPLE OF WEEKS, MONTH+

NOTE: IF A USER'S OPTION IS LEFT BLANK THEN USE THE DEFAULT WHICH IS THE MIDDLE OPTION FOR EXAMPLE DURATION DEFAULT IS ONE WEEK
EXTRA NOTE: IF DISTANCE SELECTED IS LOCAL THAT MEANS FIND PLACES WITHIN THEIR COUNTRY

REQUIREMENTS:
1. OUTPUT MUST BE STRICTLY VALID JSON WITH THE FOLLOWING FORMAT:

{
  "CountryCity1": {
    "Name": "NAME OF COUNTRY AND CITY",
    "Reason1": "REASON FOR RANKING",
    "Reason2": "REASON FOR RANKING",
    "Reason3": "REASON FOR RANKING"
  },
  "CountryCity2": {
    "Name": "NAME OF COUNTRY AND CITY",
    "Reason1": "...",
    "Reason2": "...",
    "Reason3": "..."
  },
  "CountryCity3": {
    "Name": "NAME OF COUNTRY AND CITY",
    "Reason1": "...",
    "Reason2": "...",
    "Reason3": "..."
  }
}

2. DO NOT INCLUDE ANY EXTRA TEXT OUTSIDE THE JSON.  
3. BASE YOUR RANKING SOLELY ON THE 10 FACTORS LISTED ABOVE.
4. PUT HEAVY WEIGHT ON YOUR DECISION BASED OFF OF THE ADDTIONAL NOTES IF PRESENT.  
5. GIVE UNIQUE AND SPECIFIC REASONS FOR EACH COUNTRY IN THE JSON.  
6. ENSURE THE JSON IS PROPERLY FORMATTED AND PARSABLE — DO NOT INCLUDE MARKDOWN, EXPLANATIONS, OR NOTES.

EXAMPLE OF VALID OUTPUT:
{
  "CountryCity1": {
    "Name": "Osaka, Japan",
    "Reason1": "Perfect Balance of city and nature areas.",
    "Reason2": "Matches user's food and safety preferences.",
    "Reason3": "Ideal weather and trip duration for user."
  },
  "CountryCity2": {
    "Name": "Rome, Italy",
    "Reason1": "...",
    "Reason2": "...",
    "Reason3": "..."
  },
  "CountryCity3": {
    "Name": "Toronto, Canada",
    "Reason1": "...",
    "Reason2": "...",
    "Reason3": "..."
  }
}`}]}),
    }).then(result => result.json())
    .then(eventsResponse =>{
        const events = eventsResponse.choices[0].message.content
        const important = events.split('</think>')[1]?.trim()
        console.log(important)
        TopThree = JSON.parse(important)
        const C1 = document.getElementById('Choice1')
const Rs11 = document.getElementById('Reason1_1')
const Rs12 = document.getElementById('Reason1_2')
const Rs13 = document.getElementById('Reason1_3')

const C2 = document.getElementById('Choice2')
const Rs21 = document.getElementById('Reason2_1')
const Rs22 = document.getElementById('Reason2_2')
const Rs23 = document.getElementById('Reason2_3')

const C3 = document.getElementById('Choice3')
const Rs31 = document.getElementById('Reason3_1')
const Rs32 = document.getElementById('Reason3_2')
const Rs33 = document.getElementById('Reason3_3')

const load = document.getElementById('loading')
load.style.display = 'none'

C1.textContent = TopThree.CountryCity1.Name
Rs11.textContent = TopThree.CountryCity1.Reason1
Rs12.textContent = TopThree.CountryCity1.Reason2
Rs13.textContent = TopThree.CountryCity1.Reason3

C2.textContent = TopThree.CountryCity2.Name
Rs21.textContent = TopThree.CountryCity2.Reason1
Rs22.textContent = TopThree.CountryCity2.Reason2
Rs23.textContent = TopThree.CountryCity2.Reason3

C3.textContent = TopThree.CountryCity3.Name
Rs31.textContent = TopThree.CountryCity3.Reason1
Rs32.textContent = TopThree.CountryCity3.Reason2
Rs33.textContent = TopThree.CountryCity3.Reason3

const title = document.getElementById('title')
title.textContent = "Your Ideal Holiday is..."
const extra = document.getElementById('belowtext')
extra.textContent = "Got an idea of where you want to go? Click the button below to find out some things you can do that will appeal to you!"

    })

})


form.addEventListener('submit', function(event){
    event.preventDefault();
})
