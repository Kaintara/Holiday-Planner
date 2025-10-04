const today = new Date().toISOString().slice(0,10)

const start = document.getElementById("start")
start.setAttribute("min",today)
const end = document.getElementById("end")
end.setAttribute("min",today)