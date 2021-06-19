const request = require('supertest');
const httpStatus = require('../../src/helpers/httpStatus');
const ROUTE = '/api/addShortUrl';


const badUrl = app => {
    describe('Wrong URL format', () => {

        it('Empty URL', () => {
            return request(app)
                .post(ROUTE)
                .send({
                    url: ""
                })
                .expect(httpStatus.badUrl)
        })

        it('URL whitout https', () => {
            return request(app)
                .post(ROUTE)
                .send({
                    url: "google.com"
                })
                .expect(httpStatus.badUrl)
        })

        it('URL whitout domain extension', () => {
            return request(app)
                .post(ROUTE)
                .send({
                    url: "https://google/"
                })
                .expect(httpStatus.badUrl)
        })

        it('String insteand of an URL', () => {
            return request(app)
                .post(ROUTE)
                .send({
                    url: "Hello world !"
                })
                .expect(httpStatus.badUrl)
        })
    })

}

const goodUrl = app => {
    describe('Good URL format', () => {

        it('Good small URL', () => {
            return request(app)
                .post(ROUTE)
                .send({
                    url: "https://google.com"
                })
                .expect(200)
        })
        it('Good long URL', () => {
            return request(app)
                .post(ROUTE)
                .send({
                    url: "https://www.google.com/search?q=hello+world&oq=hello+world&aqs=chrome..69i57j46i433j46j0l7.4291j0j7&sourceid=chrome&ie=UTF-8"
                })
                .expect(200)
        })

    })
}

module.exports = {
    badUrl,
    goodUrl
}