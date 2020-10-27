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
      console.log("data decoded from JSON:", simpsons);

      // Build a block of HTML
      const simpsonsQuotesHtml = `
          <p><strong>${simpsons[0].quote}</strong></p>
          <p><strong>${simpsons[0].character}</strong></p>
          <img src="${simpsons[0].image}" />
        `;
      document.querySelector("#simpsonsQuotes").innerHTML = simpsonsQuotesHtml;
    });
}

fetchSimpsonsQuotesJSON();
