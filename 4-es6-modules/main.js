import Country from "./module.js";

let arrCountriesObj = [];

const getJsonCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const json = await response.json();
  return json;
}

const createCountries = (json) => {
  json.forEach(country => {
    const countryObj = new Country(country.name.common, country.area);
    arrCountriesObj.push(countryObj);
  })
}

const sortCountries = (arrCountriesObj) => {
  const jsonSorted = arrCountriesObj.sort((a, b) => {
    return b.area - a.area;
  });

  return jsonSorted;
}

const filterBigContries = (arrCountriesObj) => {
  const bigCountries = arrCountriesObj.filter(country => {
    return country.area > 400000;
  }).map(country => {
    return country.name;
  }).join(", ");
  console.log(bigCountries);
}

(async () => {
  const json = await getJsonCountries();
  const jsonSorted = sortCountries(json);
  createCountries(jsonSorted);
  filterBigContries(arrCountriesObj);
})();