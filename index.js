

const API_KEY = ""
fetch(`https://api.openweathermap.org/data/2.5/weather?zip=90029,US&units=imperial&appid=${API_KEY}`).then(response => response.json()).then(data => {
    console.log(data.weather[0].icon)
    console.log(data)
    showDescription(data.weather[0].description)
    showTemperature(data.main.temp)
    
    })
    .catch(error => {
        console.error(error)
    })

const result = document.querySelector("#weather-description");
const showDescription = description => {
    result.innerHTML = `${description.toUpperCase()}`
}
const temperature = document.querySelector("#temp");
const showTemperature= temp => {
    temperature.innerHTML = `${Math.round(temp)} °F`
}

const dateEl = document.querySelector("#time");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saurday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour>=12 ? "PM" : "AM"
    
    dateEl.innerHTML = days[day] + ", " + date + " " + months[month]

},1000)


