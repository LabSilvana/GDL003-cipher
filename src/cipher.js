window.cipher = {
  encode: function(recorrido, texto) {
    let codeCipher='';
    for(let i=0; i < texto.length;i++) {
      let code_ascii = texto.charCodeAt(i);
      if(code_ascii >= 65 && code_ascii <= 90) {
      let value_letter = (code_ascii-65 + recorrido)%26 + 65;
         let capital_letter= String.fromCharCode(value_letter);
         codeCipher += capital_letter;
      }
      else if (code_ascii>=97 && code_ascii<=122) {
        let value_lower = (code_ascii-97 + recorrido)%26 +97;
        let letter_lower = String.fromCharCode(value_lower);
        codeCipher += letter_lower;
      }
      else if(code_ascii == 32){
        let space = " ";
        codeCipher += space;
      }
    }
    return codeCipher;
  },
  decode: function() {

  }
};
