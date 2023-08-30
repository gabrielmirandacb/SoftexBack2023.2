const PI = 3.14159;

var raio = parseFloat(prompt("Informe o valor do raio: ")) 

area = calcularArea(raio);
volume = calcularVolume(raio);

console.log("Area = " + area.toFixed(2))
console.log("Volume = " + volume.toFixed(2))


function calcularArea (r){ 
    a = 4 * PI * r**2;
    return a;
}

function calcularVolume (r){
    v = (4/3) * PI * r**3;
    return v;
}

