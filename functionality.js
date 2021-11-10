window.onload = () => {
    initComponents();
};

const initComponents = () => {
    var switchL = document.querySelector("#Light");
    var switchD = document.querySelector("#Dark");
    switchL.addEventListener("click", () => {
        document.querySelector(".theme").style.background = "white";
    });
    switchD.addEventListener("click", () => {
        document.querySelector(".theme").style.background = "#181A1B";
    });
    var search = document.querySelector("#searchCity");
    var city = document.querySelector("#cityName");
    search.addEventListener("click", () => {
        var key = "bcdee08b4c7d9e49612292a757dc9f8a";
        var url =
            "http://api.openweathermap.org/data/2.5/weather?q=" +
            city.value +
            "&appid=" +
            key;
        requestData(url);
    });
};

const requestData = (url) => {
    getFetchClima(url)
        .then((data) => {
            return data.json();
        })
        .then((climaInfo) => {
            showClima(climaInfo);
        });
};

const getFetchClima = (url) => {
    return fetch(url);
};

const showClima = (climaInfo) => {
    var country = document.querySelector("#country");
    var main = document.querySelector("#main");
    var temperature = document.querySelector("#temperature");

    country.innerHTML = climaInfo.name;
    var argMain = getArgument(climaInfo.weather);
    main.innerHTML = argMain.description;
    var currentTemp = parseInt(climaInfo.main.temp);
    currentTemp = currentTemp - 273.15;
    currentTemp = Math.round(currentTemp);
    temperature.innerHTML = currentTemp + " ºC";
};

const getArgument = (array) => {
    for (var index in array) {
        var myArgument = array[index];
    }
    return myArgument;
};
