#!/usr/bin/node

const request = require('request');

const movieUrl = `https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`;

request.get(movieUrl, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const movie = JSON.parse(body);
  const characters = movie.characters;
  const names = new Array(characters.length);

  let completed = 0;

  characters.forEach((characterUrl, index) => {
    request.get(characterUrl, (characterError, characterResponse, characterBody) => {
      if (characterError) {
        console.log(characterError);
        return;
      }

      const character = JSON.parse(characterBody);
      names[index] = character.name;
      completed += 1;

      if (completed === characters.length) {
        names.forEach((name) => {
          console.log(name);
        });
      }
    });
  });
});
