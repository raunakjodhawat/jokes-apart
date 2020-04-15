import { makeNetworkRequest } from './network';

test('Test that external API is not down', async () => {
    const jokeNumber15 = await makeNetworkRequest("GET", process.env.EXTERNAL_API_URL);
    if(jokeNumber15.status === 200 && jokeNumber15.message && jokeNumber15.message.value && jokeNumber15.message.value.joke){
        expect(jokeNumber15.message.value.joke).toBe("When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.");
    } else {
        throw Error("Test failed");
    }
});

test('Test request API gateway and lambda', async () => {
    const randomJoke = await makeNetworkRequest("GET", process.env.GATEWAY_API_URL);
    if(randomJoke.status === 200){
        expect(randomJoke.message).toBeDefined()
    } else {
        throw Error("Test failed");
    }
});
