const axios = require('axios');

const url = 'https://restcountries.com/v3.1/all'

axios.get(url).then(response => {
    const filteredCountries = response.data.filter(country => country.population > 1000000);

    const countries = filteredCountries.map(country => ({
        name: country.name.common,
        capital: country.capital ? country.capital[0] : undefined,
    }));

    console.log(countries);
});
