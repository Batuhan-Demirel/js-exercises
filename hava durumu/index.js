const konum = document.querySelector(".konum");
const derece = document.querySelector(".derece");
const icon = document.querySelector(".icon");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

const API_ID = ""

const cek = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_ID}`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { name, main, weather } = data;

      konum.innerHTML = name;
      derece.innerHTML = Math.floor(main.temp) + " °";
      icon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`
      );
    })
    .catch((error) => {
      console.log(error);
      konum.innerHTML = "Undefined";
      derece.innerHTML = "";
      icon.setAttribute("src", " ");
    });
};
window.onload = () => {
  let city = "istanbul";
  cek(city);
};

button.addEventListener("click", function () {
  city = `${input.value.toLowerCase()}`;
  cek(city);
  input.value=""
});
