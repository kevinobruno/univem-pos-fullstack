require('dotenv/config');
const fs = require('fs');
const axios = require('axios');
const uuid = require('uuid');

class CountryService {
    async getCountry(user) {
        const countryName = user.country.toLowerCase();

        const url = `${process.env.API_COUNTRY_URL}/name/${countryName}`;
        
        axios.get(url).then(response => {
            const detailedCountry = response.data[0].name.official;
            const data = { user: user.name, country: detailedCountry };

            fs.writeFileSync(`output/${uuid.v1()}.json`, JSON.stringify(data));
        });
    }
}

module.exports = CountryService;
