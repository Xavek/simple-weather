// ---selectors---
const cityName = document.querySelector(".name");
const countryName = document.querySelector(".countryName");
const description = document.querySelector(".desc");
const tempU = document.querySelector(".temp");

const btn = document.querySelector(".btn");
const userInp = document.getElementById("searchCity");

btn.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userInp.value}&appid=19c13c8f1341c5ad84e133695eb8dff2`
  ).then((response) =>
    response
      .json()
      .then((data) => {
        console.log(data);
        let city = data.name;
        let country = data.sys.country;
        let temp = Math.floor(data.main.temp - 273.15) + "°C";
        let descrp = data["weather"][0]["description"];
        countryName.innerHTML = country;
        tempU.innerHTML = temp;
        cityName.innerHTML = city;
        description.innerHTML = descrp;
      })
      .catch((err) => {
        alert("Invalid city name!");
      })
  );
});
