/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL
  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
/* HTML: all inside <div class="carousel-container">
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
  */
//current html container for the carousel:
const carouselPlaceholder = document.getElementsByClassName(
  "carousel-container"
);
function carouselComp() {
  //elements
  const carouselParent = document.createElement("div");
  const leftbutton = document.createElement("div");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const img3 = document.createElement("img");
  const img4 = document.createElement("img");
  const rightbutton = document.createElement("div");
  //classes
  carouselParent.classList.add("carousel");
  leftbutton.classList.add("left-button");
  rightbutton.classList.add("right-button");
  //contents
  img1.src =
    "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
  img2.src =
    "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
  img3.src =
    "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
  img4.src =
    "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";
  //putting children with the parent
  carouselParent.appendChild(leftbutton);
  carouselParent.appendChild(img1);
  carouselParent.appendChild(img2);
  carouselParent.appendChild(img3);
  carouselParent.appendChild(img4);
  carouselParent.appendChild(rightbutton);
  console.log(carouselParent);
  console.log(carouselPlaceholder);
}
carouselPlaceholder.appendChild(carouselComp());
