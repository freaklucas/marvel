import axios from 'axios';

const urlBaseMarvel = 'http://gateway.marvel.com/v1/public';
const apiKey = '9885974f46e5ea748379ca431a0f371b';

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}