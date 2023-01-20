const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");
const url1 = "https://api.chucknorris.io/jokes/";
btn.textContent = "Search";

buildCats();

btn.addEventListener("click", (e) => {
  //   console.log("ready");
  const val1 = inputVal.value || "test";
  const tempURL = url1 + "search?query=" + val1;
  getJokes(tempURL, val1); // val1 === search Term
});

function buildCats() {
  const urlTemp = url1 + "categories";
  console.log(urlTemp);
  fetch(urlTemp)
    .then((rep) => rep.json())
    .then((data) => {
      console.log(data);
      h1.innerHTML = "";
      data.forEach((cat) => {
        const btnTemp = document.createElement("button");
        btnTemp.classList.add("btns");
        btnTemp.textContent = cat;
        h1.append(btnTemp);
        btnTemp.addEventListener("click", (e) => {
          //https://api.chucknorris.io/jokes/random?category={category}
          console.log(cat);
          const tempURL = url1 + "random?categories=" + cat;
          fetch(tempURL)
            .then((rep) => rep.json())
            .then((json) => {
              output.innerHTML = "Categorey : " + cat + "<hr>";
              addJoke(json.value);
            });
        });
      });
    });
}

function getJokes(url, searchTerm) {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      output.innerHTML = `${searchTerm} found ${data.total}`;
      console.log(data);
      data.result.forEach((joke) => {
        console.log(joke);
        addJoke(joke.value);
      });
    });
}

function getJoke(url) {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      output.innerHTML = "";
      addJoke(data.value);
    });
}

function addJoke(val) {
  output.innerHTML += val + "<br>";
}

/*
    <!DOCTYPE html>
    <html>
     
    <head>
        <title>JavaScript JSON</title>
        <style>
            .btns{
                padding:12px;
                margin:5px;
                cursor: pointer;
                font-size: 0.9em;
                border: 1px solid #ddd;
                border-radius: 25px;
                text-transform: capitalize;
            }
            .btns:hover{
                opacity: 0.8;
            }
            input, .btn{
                font-size: 1.5em;
                display: block;
                margin:auto;
                text-align: center;
                width:80%;
            }
            .output{
                padding:20px;
                margin:auto;
                width: 70%;
                font-size: 0.9em;
                border:1px solid #ddd;
            }
     
        </style>
    </head>
     
    <body>
        <h1>JSON</h1>
        <input type="text" class="val">
        <button class="btn">Click</button>
        <div class="output"></div>
        <script src="app7.js"></script>
    </body>
     
    </html>

    const btn = document.querySelector('.btn');
    const h1 = document.querySelector('h1');
    const output = document.querySelector('.output');
    const inputVal = document.querySelector('.val');
    const url1 = 'https://api.chucknorris.io/jokes/'; 
    btn.textContent = 'Search';
     
    buildCats();
     
    btn.addEventListener('click', (e) => {
        console.log('ready');
        const val1 = inputVal.value || 'test';
        const tempURL = url1 + 'search?query='+val1;
        getJokes(tempURL,val1);
    })
     
    function buildCats(){
        const urlTemp = url1 + 'categories';
        console.log(urlTemp);
        fetch(urlTemp).then(rep => rep.json())
        .then((data)=>{
            console.log(data);
            h1.innerHTML = '';
            data.forEach((cat)=>{
                const btnTemp = document.createElement('button');
                btnTemp.classList.add('btns');
                btnTemp.textContent = cat;
                h1.append(btnTemp);
                btnTemp.addEventListener('click',(e)=>{
                    //https://api.chucknorris.io/jokes/random?category={category}
                    console.log(cat);
                    const tempURL = url1 + 'random?category=' + cat;
                    fetch(tempURL).then(rep=>rep.json())
                    .then((json)=>{
                        output.innerHTML = 'Category : ' + cat + '<hr>';
                        addJoke(json.value);
                    })
                })
            })
        })
    }
     
     
    function getJokes(url,searchTerm){
        fetch(url)
        .then(rep => rep.json())
        .then((data)=>{
            output.innerHTML = `${searchTerm} found ${data.total}`;
            console.log(data);
            data.result.forEach((joke) => {
                console.log(joke);
                addJoke(joke.value);
            });
        })
     
    }
     
     
    function getJoke(url){
        fetch(url)
        .then(rep => rep.json())
        .then((data)=>{
            output.innerHTML = '';
            addJoke(data.value);
        })
    }
     
    function addJoke(val){
        output.innerHTML += val + '<br>';
    }
*/
