// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerDiv = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");
  headerDiv.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");
  date.textContent = `MARCH 28, 2020`;
  title.textContent = `Lambda Times`;
  temp.textContent = `98°`;
  headerDiv.appendChild(date);
  headerDiv.appendChild(title);
  headerDiv.appendChild(temp);
  return headerDiv;
}
//creating constants to run the function, and to add it as a child to the .header-container parent:
const header = Header();
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(header);
//the title was getting cut off slightly:
headerContainer.style = "margin-top: 1%";
