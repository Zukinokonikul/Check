//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

const button = document.querySelector("#btn");

button.addEventListener("click", show);

function show() {

    const tagNumber = document.querySelector("#nr");
    //console.log(tagNumber.value)

    const nameTemperature = document.querySelector("#temp");
    console.log(nameTemperature.value)

    const TempNr = tagNumber.value
    var outputTemp = 0

    if(nameTemperature.value === "C"){
        //(1°C*9/5)+32=F
        outputTemp= TempNr*9/5+32
        outputTemp = Math.round(outputTemp * 100) / 100
        var outputTempString = ("Twoja temperatura w F będzie się równać: " + outputTemp)
    }

    if(nameTemperature.value === "F"){
        //(°F - 32) ÷ 9/5
        outputTemp= (TempNr-32)/(9/5)
        outputTemp = Math.round(outputTemp * 100) / 100
        var outputTempString = ("Twoja temperatura w C będzie się równać: " + outputTemp)
    }

    document.getElementById("out").innerHTML = outputTempString ;

}
