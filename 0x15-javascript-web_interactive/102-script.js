document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#language_code');
  const button = document.querySelector('#btn_translate');
  const helloDiv = document.querySelector('#hello');

  async function translate () {
    const langCode = input.value.trim();

    try {
      const response = await fetch(`https://hellosalut.stefanbohacek.dev/?lang=${encodeURIComponent(langCode)}`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error: could not load translation';
    }
  }

  button.addEventListener('click', translate);
});
