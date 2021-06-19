const bodyParser = require("body-parser");
const timeout = require('connect-timeout');
const compression = require('compression');
const helmet = require("helmet");
const sendErr = require('./helpers/sendErr');
const httpStatus = require('./helpers/httpStatus');
const cors = require('cors');
require('./sql/config');



module.exports = app => {
    app.use(timeout('50s'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(helmet());
    app.use(cors());
    app.use(compression());

    app.use((err, req, res, next) =>
        sendErr(httpStatus.internal, res, err.stack)
    );
};