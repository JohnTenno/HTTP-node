const https = require('https');

const url = 'https://rickandmortyapi.com/api/character';
const port = 3000;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
    } catch (error) {
      console.error('Error:', error);
    }
  });
}).on('error', (err) => {
  console.error('Error:', err);
});