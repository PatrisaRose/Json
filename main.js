let lista = []

$(function () {
  let vegpont = "adat.json";
  fetch(vegpont)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        lista = data.adatLista
        console.log(lista)
    })
    .catch((err) => console.log(err));
});
