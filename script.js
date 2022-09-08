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
        console.log(data);
    });
})