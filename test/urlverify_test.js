const urlverify = require('../urlverify');
const chai = require('chai');
const expect = chai.expect;

describe('urlverify', () => {
    it ('should verify one valid url', () => {
        var input = "https://google.com";
        var cb = (url, res) => {
            expect(res).to.equal('successful');
        };
        urlverify.urlIsValid(input, cb);
    });
    it ('should reject one invalid url', () => {
        var input = "https://thisreallyshouldntbeaurlimeancomeonreally.com";
        var cb = (url, res) => {
            expect(res).to.equal('unsuccessful');
        };
        urlverify.urlIsValid(input, cb);
    });
    it ('should reject one malformed url', () => {
        var input = "This is not a url";
        var cb = (url, res) => {
            expect(res).to.equal('malformed');
        };
        urlverify.urlIsValid(input, cb);
    });
    it ('should reject one malformed url', () => {
        var input = "www.yahoo.com";
        var cb = (url, res) => {
            expect(res).to.equal('malformed');
        };
        urlverify.urlIsValid(input, cb);
    });
    
    it ('should verify urls', () => {
        var input = {"urls":["qwer","https://google.com","http://notarealurlihopeasdfasdfasdf.net"]};
        var cb = (urlsWithStatus) => {
            expect(urlsWithStatus[0]['response']).to.equal('malformed');
            expect(urlsWithStatus[1]['response']).to.equal('successful');
            expect(urlsWithStatus[2]['response']).to.equal('unsuccessful');
        }
        urlverify.verifyUrls(input.urls, cb);
    });
});