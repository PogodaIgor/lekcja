
function dodac(){
    var liczba1 = document.querySelector("#liczba1").value
    var liczba2 = document.querySelector("#liczba2").value
    document.querySelector("#h").innerHTML = parseInt(liczba1) + parseInt(liczba2)
}
function odjac(){
    var liczba1 = document.querySelector("#liczba1").value
    var liczba2 = document.querySelector("#liczba2").value

    document.querySelector("#h").innerHTML = parseInt(liczba1) - parseInt(liczba2)
}
function mnozyc(){
    var liczba1 = document.querySelector("#liczba1").value
    var liczba2 = document.querySelector("#liczba2").value

    document.querySelector("#h").innerHTML = parseInt(liczba1) * parseInt(liczba2)
}
function dzielic(){
    var liczba1 = document.querySelector("#liczba1").value
    var liczba2 = document.querySelector("#liczba2").value

    document.querySelector("#h").innerHTML = liczba1 / liczba2

    if(liczba2 == 0){
        document.querySelector("#h").innerHTML = "Nie można dzielić przez 0"
    }
}