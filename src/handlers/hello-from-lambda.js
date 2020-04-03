/**
 * A Lambda function that returns a string.
 */
exports.helloFromLambdaHandler = async () => {
    let res = await axios.get('http://api.icndb.com/jokes/random/')
    if(res && res.data && res.data.value && res.data.value.joke){
        return {
            statusCode: 200,
            body: res.data.value.joke,
        };
    }
};
