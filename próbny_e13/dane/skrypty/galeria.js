const favicons = document.getElementById("gallery-favicons");
const bigImg = document.getElementById("gallery-big");

console.log(favicons);
favicons.addEventListener("mouseover", e => {
  if (e.bubbles && e.target.tagName === "IMG") {
    const img = document.createElement("img");
    img.src = e.target.src;
    img.alt = e.target.alt;
    bigImg.innerHTML = "";
    bigImg.appendChild(img);
    // console.log(e.target.alt);
    // console.log(e.target.src);
  }
});
