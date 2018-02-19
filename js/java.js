"use strict";

var dispaly = document.getElementById("wyswietlacz");
var przycisk = document.querySelectorAll("input");
var index = "",wynik = "";

for (var i = 0; i < przycisk.length; i++) {
    przycisk[i].addEventListener("click", function () {
        if (wynik != "") {
            dispaly.innerHTML = "";
            wynik = "";
        }

        if (this.value != "=" && this.value != "C" && this.value != "+" && this.value != "-" && this.value != "*" && this.value != "/") {
            dispaly.innerHTML += this.value;
            index += this.value;
            //console.log(index);
        }

        if ((this.value == "+" || this.value == "-" || this.value == "*" || this.value == "/") && index != "") {
            if (this.value != index[index.length - 1]) {
                index += this.value;
                dispaly.innerHTML += this.value;
            }
        }

        if (this.value == "C") {
            dispaly.innerHTML = "";
            index = "";
            return
        }

        if (this.value == "=" && index != "") {
            dispaly.innerHTML = eval(index);
            wynik = index;
            index = "";
            return
        }
    });
}