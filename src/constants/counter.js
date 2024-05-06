document.addEventListener('astro:page-load', () => {
    // Obtenemos los elementos por su id
    var estacionesElement = document.getElementById("estaciones");
    var employeesElement = document.getElementById("employees");
    var countriesElement = document.getElementById("countries");
    var yearsElement = document.getElementById("years");
				
    // Función para incrementar el número cada cierto intervalo de tiempo
    function incrementarNumero() {
        var estacionesText = estacionesElement.innerText;
        var employeesText = employeesElement.innerText;
        var countriesText = countriesElement.innerText;
        var yearsText = yearsElement.innerText;
        var symbol = estacionesText.charAt(0); // Obtener el primer caracter (el símbolo)
        var estaciones = parseInt(estacionesText.substr(1)); // Obtener el número después del símbolo
        if (estaciones < 100) {
            estaciones++;
            estacionesElement.innerText = symbol + estaciones; // Mantener el símbolo junto al número
        }
        var symbol = employeesText.charAt(0); 
        var employees = parseInt(employeesText.substr(1)); 
        if (employees < 1200) {
            employees++;
            employeesElement.innerText = symbol + employees; 
        }
        var symbol = countriesText.charAt(0); 
        var countries = parseInt(countriesText.substr(1)); 
        if (countries < 4) {
            countries++;
            countriesElement.innerText = symbol + countries; 
        }
        var symbol = yearsText.charAt(0); 
        var years = parseInt(yearsText.substr(1)); 
        if (years < 40) {
            years++;
            yearsElement.innerText = symbol + years; 
        }
    }

    // Llamar a la función incrementarNumero cada segundo
    setInterval(incrementarNumero, .04);
});