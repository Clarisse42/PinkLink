const shortid = require('shortid');
require('dotenv').config();
const baseUrl = process.env.BASE_URL;

const generateShortUrl = () => {
    const urlId = shortid.generate();

    return {
        shortUrl: baseUrl + '/' + urlId,
        urlId: urlId
    }
}

module.exports = {
    generateShortUrl
}