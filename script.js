const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "qiMLh7u1DsnNVWal1kBx7g==yLqKsiXCQvxobm10";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating.......";
    btnEl.disabled = true;
    btnEl.innerText = "Loading.......";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    //   console.log(data);
    //   console.log(data[0].joke);

    let ourJoke = data[0].joke;
    //   console.log(ourJoke);
    jokeEl.innerText = ourJoke;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  } catch (error) {
    jokeEl.innerText = "An error happend, try again later!"
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
