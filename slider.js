// Code for Sliders
const slider1 = document.getElementById('slider1');
const output1 = document.getElementById('sliderValue1');
const slider2 = document.getElementById('slider2');
const output2 = document.getElementById('sliderValue2');
const slider3 = document.getElementById('slider3');
const output3 = document.getElementById('sliderValue3');
const slider4 = document.getElementById('slider4');
const output4 = document.getElementById('sliderValue4');
const slider5 = document.getElementById('slider5');
const output5 = document.getElementById('sliderValue5');
const slider6 = document.getElementById('slider6');
const output6 = document.getElementById('sliderValue6');
const slider7 = document.getElementById('slider7');
const output7 = document.getElementById('sliderValue7');

const areas = ["Completely Urban Setting","Mostly Urban","Balanced","Mostly Natural","Complete Natural Setting"]
const temps = ["Sweltering","Warm","Cool","Chilly","Freezing"]
const dis = ["Local Area","Bordering Countries","Same continent","Adjacent Continents","Anywhere"]
const saf = ["Top Priority","4","Mid Priority","2","Lowest Priority"]
const type = ["Complete Relaxation","Mostly Relaxing","Balanced","Mostly Adventure","Complete Adventure"]
const food = ["Top Priority","4","Mid Priority","2","Lowest Priority"]
const days = ["One Day","Couple of Days","One Week","Couple of Weeks","Month+"]

slider1.addEventListener('input', function() {
    const index = Number(slider1.value) - 1
    output1.textContent = areas[index];
    output1.classList.add("text")
})

slider2.addEventListener('input', function() {
    const index = Number(slider2.value) - 1
    output2.textContent = temps[index];
    output2.classList.add("text")
})

slider3.addEventListener('input', function() {
    const index = Number(slider3.value) - 1
    output3.textContent = dis[index];
    output3.classList.add("text")
})

slider4.addEventListener('input', function() {
    const index = Number(slider4.value) - 1
    output4.textContent = saf[index];
    output4.classList.add("text")
})

slider5.addEventListener('input', function() {
    const index = Number(slider5.value) - 1
    output5.textContent = type[index];
    output5.classList.add("text")
})

slider6.addEventListener('input', function() {
    const index = Number(slider6.value) - 1
    output6.textContent = food[index];
    output6.classList.add("text")
})

slider7.addEventListener('input', function() {
    const index = Number(slider7.value) - 1
    output7.textContent = days[index];
    output7.classList.add("text")
})