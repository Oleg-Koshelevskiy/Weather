fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Kamianets-Podilskyi&units=metric&lang=ua&appid=5d066958a60d315387d9492393935c19"
)
  .then((feedback) => feedback.json())
  .then((data) => {
    console.log(data);
    let city = document.querySelector(".city");
    city.innerHTML = "Поточне розташування: " + data.name;

    let temp = document.querySelector(".temp");
    temp.innerHTML = "Температура: " + data.main.temp + " &#176C";
    let tempFeelsLike = document.querySelector(".temp-feels-like");
    tempFeelsLike.innerHTML =
      "Відчувається як: " + data.main.feels_like + " &#176C";
    let pressure = document.querySelector(".pressure");
    pressure.innerHTML = "Тиск: " + data.main.pressure + " hPa";
    let description = document.querySelector(".description");
    description.innerHTML = "Опис: " + data.weather[0].description;
    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = "Вологість: " + data.main.humidity + "%";
    let speed = document.querySelector(".speed");
    speed.innerHTML = "Швидкість вітру: " + data.wind.speed + " м/с";
    let deg = document.querySelector(".deg");
    deg.innerHTML = "Напрям вітру: " + data.wind.deg + " &#176";
    let icon = document.querySelector(".icon");
    let iconNow = data.weather[0].icon;
    icon.innerHTML =
      '<img src="https://openweathermap.org/img/w/' + iconNow + '.png">';

    let unixTimestamp = data.dt;

    let milliseconds = unixTimestamp * 1000;

    let dateObject = new Date(milliseconds);

    let humanDateFormat = document.querySelector(".date");
    humanDateFormat.innerHTML =
      "Погода станом на: " + dateObject.toLocaleString();
  });
