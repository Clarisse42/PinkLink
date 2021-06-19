const { knex } = require('./config');

const getUrls = url =>
    knex('urls').select().where({
        url: url
    })
        .then(data => data)
        .catch(err => {
            throw err;
        });

const setUrls = (urlId, url, shortUrl) =>
    knex('urls').insert({
        urlId,
        url,
        shortUrl,
    }).catch(err => {
        throw err;
    });


const getAllUrl = () =>
    knex('urls').select()
        .then(data => JSON.parse(JSON.stringify(data)))
        .catch(err => {
            throw err;
        });

const deleteUrl = (urlId) =>
    knex('urls').delete().where({
        urlId
    })

const getUrlOfShortUrl = (urlId) =>
    knex('urls').select('url').where({
        urlId
    }).then(data => JSON.parse(JSON.stringify(data)))

module.exports = {
    getUrls,
    setUrls,
    getAllUrl,
    deleteUrl,
    getUrlOfShortUrl
}