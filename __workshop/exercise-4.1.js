const request = require('request-promise');

// getDadJoke

// 4.1

const getDadJoke = async () => {
    try {
        const response = await request( {
            headers: {Accept: 'application/json'},
            uri: "https://icanhazdadjoke.com/"
        })
        const dadJoke = JSON.parse(response);
        return dadJoke.joke;
    } catch (err) {
        console.log('Error: ', err);
    }
};

getDadJoke().then((data) => console.log(data));