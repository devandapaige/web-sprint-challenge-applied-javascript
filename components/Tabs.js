// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
/* To do this problem, I created a constant for the HTML class .topics that is the hold each of the trending topics. Then I retreived the data with axios, and within the responce created a forEach loop that will create a new topic element for each of the data points.*/
const topicsParent = document.querySelector(".topics");
axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    const tabs = res.data.topics;
    //console.log(tabs);
    tabs.forEach((topic) => {
      const newTab = document.createElement("div");
      newTab.classList.add("tab");
      newTab.textContent = `${topic}`;
      //console.log(newTab)
      topicsParent.appendChild(newTab);
    });
  })
  .catch((err) => {
    console.log(err);
  });
