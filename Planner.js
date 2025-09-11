// Code for Sliders
const slider = document.getElementById('slider');
const output = document.getElementById('sliderValue');
const areas = ["Inner City","Green Urban","Balanced","Nature-Focused Towns","Remote Nature"]


if (slider.value == '3') {
    output.textContent = 'Inner City';
} 

slider.addEventListener('input', function() {
    const index = Number(slider.value) - 1
    output.textContent = areas[index];
})

