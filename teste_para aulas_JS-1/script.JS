/*funcição de conversão de real para dolar

function realdolar(valor1, valor2){
    return valor1 * valor2;
}

var valorreal=7.89;
var cotacao=5.04;

var total=realdolar(valorreal, cotacao);
document.getElementById("texto").innerHTML= "o valor em real é R$:"+valorreal+" "+"o valor em dolar é U$:"+cotacao;
*/
/*CODIGO para quando o usuario abertar um botao aparecer ola

function alertahello(){
    alert("ola niggas");
}
    */
   /* codigo de conversao de fahrenhrit para celsius
   
   function paracelsius(parafahrenheit){
    return (5/9) *(parafahrenheit-32);
   }
   
   var v1=paracelsius(77);
        
   alert(v1);
   */
/*
const carro ={
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    completo: function () {
        return "a marca é" +" "+ this.marca +" "+ "o modelo é"+" "+ this.modelo
    }
};
alert(carro.completo());
*/

let contador=0
let valorDoClique = 1;
let valordomais=10;
let valordovezes=50;

document.getElementById('texto2').innerHTML="valor do clique atual:"+valorDoClique;

function mouse(){
    let p=document.getElementById("texto");
    contador= contador + valorDoClique;

    p.innerText=contador;

    cemcliques();
};

function comprarVariosUpgrade() {
    let p = document.getElementById('texto');
    document.getElementById("texto");
    // Se o jogador não tiver dinheiro nem para o primeiro, já avisa de cara
    if (contador < valordomais) {
        alert('Necessário pelo menos ' + valordomais + ' cliques');
        return; 
    }

    while (contador >= valordomais) {
        let p = document.getElementById('texto');
    document.getElementById("texto");
        contador = contador - valordomais; // Paga o preço atual
        valorDoClique = valorDoClique + 1;  // Melhora o clique
        valordomais = valordomais + 10;
        atualizarTela()
    }
}
    function maisclique(){
        let p=document.getElementById('texto');
        document.getElementById("texto");

        if(contador>=valordomais){
            contador=contador-valordomais;
            valorDoClique=valorDoClique + 1;
            valordomais=valordomais+10;
            p.innerText =contador;
            document.getElementById('texto2').innerHTML="valor do clique atual:"+valorDoClique;
            atualizarTela()
        }
        else{
            alert('necessario'+' '+valordomais+' cliques');
        }
    }
    function vezesclique(){
        let p=document.getElementById('texto');
        document.getElementById("texto");
        if(contador>=valordovezes){
            contador=contador-valordovezes;
            valorDoClique=valorDoClique*2;
            valordovezes=valordovezes+50;
            p.innerText=contador;
            document.getElementById('texto2').innerHTML="valor do clique atual:"+valorDoClique;
              atualizarTela()
        }
        else{
            alert('necessario '+valordovezes+' cliques');
        }
    }
    function comprarVariosvezes() {
    let p = document.getElementById('texto');
    document.getElementById("texto");
    // Se o jogador não tiver dinheiro nem para o primeiro, já avisa de cara
    if (contador < valordovezes) {
        alert('Necessário pelo menos ' + valordovezes + ' cliques');
        return; 
    }

    while (contador >= valordovezes) {
        let p = document.getElementById('texto');
    document.getElementById("texto");
        contador = contador - valordovezes; // Paga o preço atual
        valorDoClique = valorDoClique * 2;  // Melhora o clique
        valordovezes = valordovezes + 50;
        atualizarTela();
    }
}
/*
    function cemcliques(){
        
        if(contador>=100){
            document.body.style.backgroundColor="yellow"
        }
    }
*/
    function atualizarTela() {
    document.getElementById("texto").innerText = contador;
    document.getElementById('texto2').innerHTML = "Valor do clique atual: " + valorDoClique;
}