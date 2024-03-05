const numero = document.getElementById('miInput');
const celsius = document.getElementById('toCelsius');
const farenheit = document.getElementById('toFarenheit');
let resultado = document.getElementById('resultado');
let temp;


function alex(){
    if(celsius.checked){
        temp = Number(numero.value)
        temp =  temp * 9/5 + 32;
        resultado.textContent = temp.toFixed(1)+ " F";
        
    }else if(farenheit.checked){
        temp = Number(numero.value);
        temp =  temp - 32 * 5/9;
        resultado.textContent = temp.toFixed(1)+ " C";

    }
    
   
}

