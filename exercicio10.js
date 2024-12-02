function soma(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = soma(9,5);
console.log(resultado); 





function   numeroMaior (numero1,numero2) { 
    return  numero1 >= numero2
}
const resultado1 =  numeroMaior(9,5);
console.log(  resultado1 );

const  resultado2 = numeroMaior(5,9);
console.log(resultado2);




function par(numero3) {
    return numero3 % 2 == 0
    
}
console.log (par(10));
console.log (par(9));



function Mensagem(mensage) {
    const length = mensage.length;
    const upperCaseMessage = mensage.toUpperCase();
    
    console.log(`Tamanho da mensagem: ${length}`);
    console.log(`Mensagem em maiúsculas: ${upperCaseMessage}`);
}


Mensagem("Eu sou lindo!"); 
   









