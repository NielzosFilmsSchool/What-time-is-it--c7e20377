const pi = 3.14;

function bereken() {
    let input = document.querySelector("input").value;
    var out = input * pi;
    var out2 = input * input * pi * 0.25;
    document.querySelectorAll("p")[0].innerHTML = out;
    document.querySelectorAll("p")[1].innerHTML = out2;
}