
let boton_cipher = document.getElementById('Codificar');
let resultado_cipher = document.getElementById('resultado');
let input_text = document.getElementById('mensaje_codificado');

boton_cipher.addEventListener('click',()=> {
	resultado_cipher.innerHTML = window.cipher.encode(33,input_text.value);
});

function decipher(){
	let input_text2 = document.getElementById("mensaje_decodificado").value;
	let codeDecipher ='';
		for(let i=0; i < input_text2.length;i++){
			let Code_ascii = input_text2.charCodeAt(i);
				if(Code_ascii>=65 && Code_ascii<=90){
					let value_letter = (Code_ascii+65-33)%26+65 ;
					let capital_letter= String.fromCharCode(value_letter);
			codeDecipher+=capital_letter;
	}
	else if (Code_ascii>=97 && Code_ascii<=122) {
		let value_lower =  (Code_ascii+97-45)%26+97;
		let letter_lower = String.fromCharCode(value_lower);
		codeDecipher+=letter_lower;
	}
	else if(Code_ascii==32){
		let space = " ";
    codeDecipher+=space;
	}
}
 document.getElementById('resultado').innerHTML = codeDecipher;
}
decipher();
