async function fetchMovies () {
  const list = document.querySelector('#list_movies');

  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    for (const film of data.results) {
      const li = document.createElement('li');
      li.textContent = film.title;
      list.appendChild(li);
    }
  } catch (error) {
    list.textContent = 'Error: could not load movies';
  }
}

fetchMovies();
