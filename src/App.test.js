import React from 'react';
import { render } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { makeNetworkRequest } from './network';
import App from './App';

configure({adapter: new Adapter()});
test('External API status, test external API', async () => {
    const jokeNumber15 = await makeNetworkRequest("GET", process.env.REACT_APP_EXTERNAL_API_URL);
    if(jokeNumber15.status === 200 && jokeNumber15.message && jokeNumber15.message.value && jokeNumber15.message.value.joke){
        expect(jokeNumber15.message.value.joke).toBe("When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.");
    } else {
        throw Error("Test failed");
    }
});

test('random joke endpoint, test internal API', async () => {
    const randomJoke = await makeNetworkRequest("GET", process.env.REACT_APP_GATEWAY_API_URL);
    if(randomJoke.status === 200){
        expect(randomJoke.message).toBeDefined()
    } else {
        throw Error("Test failed");
    }
});

test('react app, should have p tag to display random joke', async () => {
    const { container } = render(<App />);
    const linkElement = container.querySelector('p');
    expect(linkElement).toBeInTheDocument();
});

test('function getJoke', async () => {
    const wrapper = shallow(<App />);
    // Initiallty the state is empty
    expect(wrapper.instance().state.joke).toEqual("")
    await wrapper.instance().getJoke();
    // after calling the getJoke function, the state should not be empty
    expect((wrapper.instance().state.joke).length).toBeGreaterThan(1)
});