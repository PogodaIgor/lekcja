function wyswietl(){
    var imie = document.querySelector("#imie").value
    var nazwisko = document.getElementById("nazwisko").value

    document.querySelector("h1").innerHTML = parseInt(imie) + parseInt(nazwisko)
    document.querySelector("h1").innerHTML = parseInt(imie) - parseInt(nazwisko)
}
