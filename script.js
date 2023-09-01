function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var resultElement = document.getElementById("result");

    if (temperatureInput === "") {
        resultElement.innerHTML = "Please enter a temperature value.";
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else if (toUnit === "kelvin") {
            convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
        } else {
            convertedTemperature = temperature;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
        } else {
            convertedTemperature = temperature;
        }
    }

    resultElement.innerHTML = temperature + " " + fromUnit + " is equal to " + convertedTemperature.toFixed(2) + " " + toUnit + ".";
}
