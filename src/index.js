let boton_cipher = document.getElementById('Codificar');
boton_cipher.addEventListener('click',cipher);

function cipher() {
	let input_text = document.getElementById("mensaje_codificado").value;
	let codeCipher='';
		for(let i=0; i < input_text.length;i++){
      let code_ascii = input_text.charCodeAt(i);
			if(code_ascii >= 65 && code_ascii <= 90){
					let value_letter = (code_ascii-65 + 33)%26 + 65;
					let capital_letter= String.fromCharCode(value_letter);
					codeCipher += capital_letter;
			}
			else if (code_ascii>=97 && code_ascii<=122) {
				let value_lower = (code_ascii-97 + 33)%26 +97;
				let letter_lower = String.fromCharCode(value_lower);
				codeCipher += letter_lower;
			}
			else if(code_ascii == 32){
				let space = " ";
        codeCipher += space;
			}
		}
		document.getElementById('resultado').innerHTML = codeCipher;
}
cipher();

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
