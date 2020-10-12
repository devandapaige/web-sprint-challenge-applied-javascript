// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
//
/*sample object to make sure my function was workion prior to importing any data.
const sampleObject = {
  SAMPLE: {
    id: "1234",
    headline: "Headline Sample",
    authorPhoto:
      "https://ca.slack-edge.com/ESZCHB482-W017LTC9AJ1-b9b561137c43-512",
    authorName: "Amanda Nelson",
  },
};*/
//actual data:
axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((data) => {
    const javascriptData = data.data.articles.javascript;
    const bootstrapData = data.data.articles.bootstrap;
    const technologyData = data.data.articles.technology;
    const jqueryData = data.data.articles.jquery;
    const nodeData = data.data.articles.node;
    javascriptData.forEach((article) => {
      const cardsParent = document.querySelector(".cards-container");
      cardsParent.appendChild(newCard(article));
    });
    bootstrapData.forEach((article) => {
      const cardsParent = document.querySelector(".cards-container");
      cardsParent.appendChild(newCard(article));
    });
    technologyData.forEach((article) => {
      const cardsParent = document.querySelector(".cards-container");
      cardsParent.appendChild(newCard(article));
    });
    jqueryData.forEach((article) => {
      const cardsParent = document.querySelector(".cards-container");
      cardsParent.appendChild(newCard(article));
    });
    nodeData.forEach((article) => {
      const cardsParent = document.querySelector(".cards-container");
      cardsParent.appendChild(newCard(article));
    });
  })
  .catch((err) => {
    console.log(`${err}`);
  });
function newCard(object) {
  //new elements for the cards
  const cardParent = document.createElement("div");
  const headline = document.createElement("div");
  const authorGroup = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorName = document.createElement("span");
  //card element classes
  cardParent.classList.add("card");
  headline.classList.add("headline");
  authorGroup.classList.add("author");
  authorImg.classList.add("img-container");
  //element content
  headline.textContent = `${object.headline}`;
  authorImg.src = `${object.authorPhoto}`;
  authorName.textContent = `${object.authorName}`;
  //putting it all together:
  cardParent.appendChild(headline);
  cardParent.appendChild(authorGroup);
  authorGroup.appendChild(authorImg);
  authorGroup.appendChild(authorName);
  //event listeners for MVP:
  cardParent.addEventListener("click", () => {
    console.log(`${headline.textContent}`);
  });
  return cardParent;
}
//console.log(newCard(sampleObject));
