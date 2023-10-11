function comparativo(){
    var numero1 = parseFloat(document.getElementById("primeiroNumero").value);
    var numero2 = parseFloat(document.getElementById("segundoNumero").value);

    if (numero1 > numero2){
        alert("O maior número é o " + numero1 + ".");
    } else if (numero2 > numero1){
        alert("O maior número é o " + numero2 + ".");
    } else{
        alert("Os números tem o mesmo valor");
    }

}

function avaliaNota(){
    var nota = parseFloat(document.getElementById("suaNota").value);
    
    if (nota < 6){
        alert("Reprovado.");
    } else if(nota < 8){
        alert("Aprovado.");
    } else if(nota <= 10) {
        alert("Aprovado com louvor.")
    } else{
        alert("Inserção inválida!");
    }
}

function mediaVetor(){

    numeros = new Array(5);
    for (var i = 0; i < 5; i++){
        numeros[i] = parseFloat(document.getElementById("numero"+i).value);
    }

    
    var soma = 0;
    for (var i = 0; i<numeros.length; i++){
        if (isNaN(numeros[i])){
            alert("Preencha o vetor corretamente!");
            return
        }
        soma += numeros[i];
    }
    
    var media = soma/5;

    alert("A média do vetor é " + media + ".");
}

function verificaLetra(){
    var letra = document.getElementById("suaLetra").value;
    if (letra.toLowerCase() == "a"){
        alert("A");
    } else if(letra.toLowerCase() == 'b'){
        alert("B");
    } else{
        alert("Outra letra.");
    }
}

function somaMatriz(){
    var matriz = new Array(3);

    for (var i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
    }

    for (var i = 0; i<3; i++){
        for(var j = 0; j < 3; j++){
            var numero = "numero" + i + j;
            matriz[i][j] = parseFloat(document.getElementById(numero).value);
        }
    }

    var soma = 0;
    
    for (var i = 0; i<3; i++){
        for(var j =0; j<3; j++){
            if(isNaN(matriz[i][j])){
                alert("Preencha todos os campos da MATRIZ!");
                return;
            }
            soma += matriz[i][j];
        }
    }

    alert("A soma de todos os elementos da matriz é: " + soma);


}

function calculaFatorial(){
    var numero = parseInt(document.getElementById("fatorial").value);

    if(isNaN(numero)){
        alert("Preencha o campo para visualizar o fatorial.");
        return;
    }

    copia = numero;
    while(numero > 1){
        numero--;
        copia = copia * numero;
    }

    alert("O resultado do fatorial é " + copia);

}

function escolherOpcao(opcao){
    if (opcao == 1){
        alert("Opção 1 escolhida.");
    } else if(opcao ==2){
        alert("Opção 2 escolhida.");
    } else if (opcao == 3){
        alert("Opção 3 escolhida.");
    } else{
        alert("Opção inválida.");
    }
}

function maiorVetor(){
    vetor = new Array(5);
    for (var i = 0; i < 5; i++){
        vetor[i] = parseFloat(document.getElementById("vetor"+i).value);
    }
    maiordoVetor = vetor[0];
    for(var i = 0; i < 5; i++){
        if(vetor[i] > maiordoVetor){
            maiordoVetor = vetor[i];
        }
    }

    alert("O maior número do vetor é: " + maiordoVetor);
    
}

function mediaMatriz(){
    var matriz = new Array(3);

    for (var i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
    }

    for (var i = 0; i<3; i++){
        for(var j = 0; j < 3; j++){
            var numero = "matriz" + i + j;
            matriz[i][j] = parseFloat(document.getElementById(numero).value);
        }
    }

    var soma = 0;
    
    for (var i = 0; i<3; i++){
        for(var j =0; j<3; j++){
            if(isNaN(matriz[i][j])){
                alert("Preencha todos os campos da MATRIZ!");
                return;
            }
            soma += matriz[i][j];
        }
    }

    var media = soma / 9;
    alert("A média de todos os elementos da matriz é: " + media.toFixed(2));


}