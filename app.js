const btn = document.querySelector(".btn");
const h1 = document.querySelector(".h1");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
const url1 = "https://api.chucknorris.io/jokes/";

btn.textContent = "Click Me";
btn.addEventListener("click", (e) => {
  console.log("ready");
  const tempURL = url1 + "random";
  getJoke(tempURL);
});

function getJoke(url) {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      output.innerHTML = "";
      addJoke(data.value);
    });
}

function addJoke(val) {
  output.innerHTML += val;
}
