#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  films.forEach((film) => {
    if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
      count += 1;
    }
  });

  console.log(count);
});
