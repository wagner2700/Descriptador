const inputTexto = document.querySelector(".input-texto"); //Obter valor em inpu-texto HTML
const mensagem = document.querySelector(".mensagem"); //Obter valor em mensagem HTML


function btnEncriptar(){
  const textoEncriptado = encriptar(inputTexto.value) //constante recebe retorno da função encriptar
  mensagem.value = textoEncriptado  //valor da mensagem é da constante textoExcriptado
  mensagem.style.background = 'none'
}


function encriptar(stringEncriptada){
    let matrizCodigo = [ ["a" ,"qw"], ["e" , "enter"] ,["i" , "imes"] , ["o" , "ober"] , ["u" , "ufat"]]

    stringEncriptada = stringEncriptada.toLowerCase(); //transformar em minuscula

    for(let i = 0 ; i < matrizCodigo.length ; i++){
      if(stringEncriptada.includes(matrizCodigo[i][0])){  //Se matrizCodigo tiver determinado na posição i e 0 de cada matriz
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]) //replaceAll troca todos a posição de  i para 
                                                                                                 //posição 1 de cada matriz [ "a" , "olqa"]
      }                                                                                                                    //  0       1
    } 
    return stringEncriptada


}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
}

function desencriptar(stringDesencriptada){
  let matrizMensagem = [["q","a"] , ["enter" , "e"] , ["imes" , "i"] , ["ober" , "o"] , ["ufat" , "u"]]

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0 ; i < matrizMensagem.length ; i++){
    if(stringDesencriptada.includes(matrizMensagem[i][0])){
       
      stringDesencriptada = stringDesencriptada.replaceAll(matrizMensagem[i][0] , matrizMensagem[i][1])
    }
  }
  return stringDesencriptada

}





