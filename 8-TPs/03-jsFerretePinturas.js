/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temp;
    let tempconvert;

    temp = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempconvert = (temp - 32) / 1.8;

    alert(`${tempconvert} Fahrenheit son ${temp} centigrados`);
}

function CentigradosFahrenheit () 
{
    let temp;
    let tempconvert;

    temp = parseFloat(document.getElementById("txtIdTemperatura").value);

    tempconvert = temp * 1.8 + 32;

    alert(`${tempconvert} centigrados son ${temp} Fahrenheit`);
	
}
