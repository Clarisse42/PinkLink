const addShortUrl = require('./addShortUrl');

module.exports = (app) => {
    addShortUrl.badUrl(app);
    addShortUrl.goodUrl(app);
}