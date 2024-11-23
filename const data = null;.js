const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://echo.paw.cloud/");
xhr.setRequestHeader("X-RapidAPI-Key", "6e2ae15c7fmshb43e85d7303320ep12b178jsn3f5c68348e63");
xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");

xhr.send(data);