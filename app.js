fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Kamianets-Podilskyi&units=metric&lang=ua&appid=5d066958a60d315387d9492393935c19"
)
  .then((feedback) => feedback.json())
  .then((data) => {
    console.log(data);
    let city = document.querySelector(".city");
    city.innerHTML = "Поточне розташування: " + data.name;
    // let date = document.querySelector(".date");
    // date.innerHTML = data.dt;
    let temp = document.querySelector(".temp");
    temp.innerHTML = "Температура: " + data.main.temp + " &#176C";
    let pressure = document.querySelector(".pressure");
    pressure.innerHTML = "Тиск: " + data.main.pressure + " hPa";
    let description = document.querySelector(".description");
    description.innerHTML = "Опис: " + data.weather[0].description;
    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = "Вологсть: " + data.main.humidity + "%";
    let speed = document.querySelector(".speed");
    speed.innerHTML = "Швидкість вітру: " + data.wind.speed + " м/с";
    let deg = document.querySelector(".deg");
    deg.innerHTML = "Напрям вітру: " + data.wind.deg + " &#176";
    let icon = document.querySelector(".icon");
    let iconNow = data.weather[0].icon;
    icon.innerHTML =
      '<img src="https://openweathermap.org/img/w/' + iconNow + '.png">';
  });
