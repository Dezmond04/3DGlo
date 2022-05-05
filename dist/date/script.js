const getData = () => {
  const timeOfDay = document.getElementById("timesOfDay");
  const day = document.getElementById("day");
  const time = document.getElementById("time");
  const newYears = document.getElementById("new-years");

  const getTimeRemaining = () => {
    let date = new Date();
    let dateNow = new Date().getTime();
    let dateNewYears = new Date(2023, 0, 01).getTime();
    let countDay = date.getDay();
    let dayNewYears = (dateNewYears - dateNow) / 1000;
    let hours = date.getHours();
    const week = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ];

    console.log(hours);
    if (hours < 11 && hours > 4) {
      timeOfDay.textContent = "Доброе утро";
    } else if (hours < 17 && hours > 11) {
      timeOfDay.textContent = "Добрый день";
    } else if (hours < 22 && hours > 17) {
      timeOfDay.textContent = "Добрый вечер";
    } else {
      timeOfDay.textContent = "Доброй ночи";
    }
    day.textContent = week[countDay - 1];
    time.textContent = date.toLocaleTimeString("en");
    newYears.textContent = Math.floor(dayNewYears / 60 / 60 / 24) + " дней";
  };
  getTimeRemaining();
};
getData();
