const axios = require("axios");
const chai = require("chai");
const assert = chai.assert;

Feature('API Proof of Concept');

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
});

Scenario('Test comments from distinct user', async () => {
    instance
        .get('/posts/1')
        .then(function (response){
            assert(response.status === 200, "Site is currently down or out of service");
            assert.isObject(response.data);
            const commentsDetails = response.data;
            //
            assert.isNotNull(commentsDetails.userId);
            assert.isNumber(commentsDetails.userId);
            assert.equal(1,commentsDetails.userId, 'these numbers are not equal');
            //
            assert.isNotNull(commentsDetails.id);
            assert.isNumber(commentsDetails.id);
            assert.equal(1, commentsDetails.id, 'these numbers are not equal');
            //
            assert.isNotNull(commentsDetails.title);
            assert.isString(commentsDetails.title);
            assert.include(commentsDetails.title, 'sunt aut facere repellat', 'string contains substring');
            //
            assert.isNotNull(commentsDetails.body);
            assert.isString(commentsDetails.body);
        })
});
