const rp = require('request-promise');

var urlIsValid = (url, cb) => {
    //http://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    var expression = /https?:\/\/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (url.match(regex)){
        rp(url).then(response => {
            cb(url, "successful");
        }, response => {
            cb(url, "unsuccessful");
        });
    }else{
        cb(url, "malformed");
    }
};

var verifyUrls = (urls, cb) => {
    var returnVal = [];
    var outstandingRequests = 0;
    var totalRequests = 0;
    for(var u in urls){
        totalRequests++;
        outstandingRequests++;
        urlIsValid(urls[u], (url, response) => {
            returnVal.push({url: url, response: response});
            if (--outstandingRequests == 0 && totalRequests == urls.length){
                return cb(returnVal);
            }
        });
    }
};

var httpResponse = (req, res) => {
    verifyUrls(req.body.urls, (urlsWithStatus) => {
        res.json(urlsWithStatus.filter((u) => {
            return u.response !== "successful";
        }));
    });
};

module.exports = {
    httpResponse:   httpResponse,
    verifyUrls:     verifyUrls,
    urlIsValid:     urlIsValid
};