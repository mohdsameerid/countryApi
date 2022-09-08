let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
    let countryName = "India";
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.png);
        console.log(data[0].name.common);
        console.log(data[0].currencies.INR.name);
        console.log(data[0].currencies.INR.symbol)
        console.log(data[0].population);
        console.log(data[0].continents[0]);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
    });
})