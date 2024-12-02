function minhasInformacoes() {
    console.log("Eu sou Matheus, tenho 18 anos, moro em São Leopoldo e sou estudante.");
}


minhasInformacoes()

function informaçoesDoUsuario(nome,idade,cidade,profissao) { 
   return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    
}
const mensagem = informaçoesDoUsuario ("samara",24,"São Leopoldo","empacotadora");

console.log(  mensagem );



