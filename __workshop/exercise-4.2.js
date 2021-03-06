const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const response = await request( {
      headers: {Accept: 'application/json'},
      uri: "https://api.tronalddump.io/random/quote"
    })
    const trumpQuote = JSON.parse(response);
    return trumpQuote.value;
  } catch (err) {
    console.log('Error :', err);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));
