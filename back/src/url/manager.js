const { generateShortUrl } = require('../helpers/utils');
const sendErr = require('../helpers/sendErr')
const httpStatus = require('../helpers/httpStatus');
const sql = require('../sql');

const addShortUrl = async (req, res) => {
    const { url } = req.body;

    try {
        let urlData = await sql.urls.getUrls(url);
        if (urlData && urlData.length > 0)
            return res.status(200).json(urlData);

        const { shortUrl, urlId } = generateShortUrl(url);

        await sql.urls.setUrls(urlId, url, shortUrl);
        urlData = await sql.urls.getUrls(url);
        return res.status(200).json(urlData);

    } catch (err) {
        return sendErr(httpStatus.internal, res, err);
    }

}

const redirectUrl = async (req, res) => {
    const { urlId } = req.params;
    try {
        const url = await sql.urls.getUrlOfShortUrl(urlId);
        if (url && url.length > 0)
            return res.redirect(url[0].url);
        else
            return res.redirect(process.env.URL_FRONT)
    } catch (err) {
        return sendErr(httpStatus.internal, res, err);
    }
}

const getAllShortUrl = async (req, res) => {
    try {
        const allUrls = await sql.urls.getAllUrl();
        return res.status(200).json(allUrls);

    } catch (err) {
        return sendErr(httpStatus.internal, res, err);
    }
}

const deleteShortUrl = async (req, res) => {
    const { urlId } = req.params;

    try {
        await sql.urls.deleteUrl(urlId);
        const allUrls = await sql.urls.getAllUrl();
        return res.status(200).json(allUrls);
    } catch (err) {
        return sendErr(httpStatus.internal, res, err);
    }

}

module.exports = {
    addShortUrl,
    getAllShortUrl,
    redirectUrl,
    deleteShortUrl
}