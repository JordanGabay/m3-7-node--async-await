const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const response = await request( {
      headers: {Accept: 'application/json'},
      uri: 'https://geek-jokes.sameerkumar.website/api?format=json'
    })
    const randomJoke = JSON.parse(response);
    return randomJoke.joke
  } catch (err) {
    console.log('Error: ', err);
  }
};

getGeekJoke().then((data) => console.log(data));
