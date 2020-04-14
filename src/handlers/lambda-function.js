/**
 * A Lambda function that returns a string.
 */
let axios = require('axios');
exports.getRandomJokes = async () => {
    let res = await axios.get('http://api.icndb.com/jokes/random/')
    if(res && res.data && res.data.value && res.data.value.joke){
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
            },
            body: res.data.value.joke,
        };
    }
};
