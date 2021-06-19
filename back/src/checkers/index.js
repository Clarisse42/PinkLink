const sendErr = require('../helpers/sendErr');
const httpStatus = require('../helpers/httpStatus');

const checkUrl = (req, res, next) => {
    const { url } = req.body
    const regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (!url.match(regexUrl))
        return sendErr(httpStatus.badUrl, res, httpStatus.badUrl.userFriendly)
    else
        return next();
}

module.exports = {
    checkUrl
}