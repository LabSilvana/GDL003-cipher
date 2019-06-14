
let boton_cipher = document.getElementById('Codificar');
let resultado_cipher = document.getElementById('resultado');
let input_text = document.getElementById('mensaje_codificado');
let boton_decipher = document.getElementById('Decodificar');
let resultado_decipher = document.getElementById('resultados');
let input_text2 = document.getElementById('mensaje_decodificado');
let input_offset = document.getElementById("desplazamiento");


boton_cipher.addEventListener('click',()=> {
	console.log(parseInt(input_offset.value));
	resultado_cipher.innerHTML = window.cipher.encode(parseInt(input_offset.value), input_text.value);
});

boton_decipher.addEventListener('click',()=> {
	console.log(parseInt(input_offset.value));
	resultado_decipher.innerHTML = window.cipher.decode(parseInt(input_offset.value), input_text2.value);
});

