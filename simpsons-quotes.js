function fetchSimpsonsQuotesJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  // const quotesId = 1;
  const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function (simpsons) {
      // Build a block of HTML
      const simpsonsQuotesHtml = `
          <p>${simpsons[0].quote}</p>
          <p><strong>${simpsons[0].character}</strong></p>
          <img src="${simpsons[0].image}" />
        `;
      document.querySelector("#simpsonsQuotes").innerHTML = simpsonsQuotesHtml;
    });
}
fetchSimpsonsQuotesJSON();

document.querySelector("#btn").addEventListener("click", () => {
  fetchSimpsonsQuotesJSON();
});
