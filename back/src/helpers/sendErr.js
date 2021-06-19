/**
 *
 * @param Status
 * @param res
 * @param e
 * @returns {*}
 */

module.exports = (Status, res, e) => {
    console.error(Status.code, e ? e : '');
    return res.status(Status['http']).json(process.env.NODE_ENV === 'test' ? Status : Status['userFriendly']);
};