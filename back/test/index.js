const app = require("../src/server").listen(3012);

const urls = require('./urls');


describe("ROUTE TESTING", function () {
    urls(app);
})
