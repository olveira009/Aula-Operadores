Atividade 1 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

a. false
b. false
c. true
d. boolean

Atividade 2 

O problema neste código é que o prompt() retorna sempre uma string, mesmo que o usuário insira um número. 
Então, quando você faz const soma = primeiroNumero + segundoNumero, está concatenando duas strings, não 
somando os números.

  // aqui esta o codigo correto

  let primeiroNumero = prompt("Digite um número:");
let segundoNumero = prompt("Digite outro número:");

primeiroNumero = parseFloat(primeiroNumero);
segundoNumero = parseFloat(segundoNumero);

const soma = primeiroNumero + segundoNumero;

console.log(soma);

Atividade 3 

const idadeUsuario = parseInt(prompt("Digite sua idade:"));
const idadeAmigo = parseInt(prompt("Digite a idade do seu melhor amigo(a):"));
const maiorQueAmigo = idadeUsuario > idadeAmigo;
console.log("Sua idade é maior do que a do seu melhor amigo?", maiorQueAmigo);
const diferencaIdade = Math.abs(idadeUsuario - idadeAmigo);
console.log("Diferença de idade:", diferencaIdade);

Atividade 4 

const numeroPar = parseInt(prompt("Digite um número par:"));

console.log("Resto da divisão por 2:", numeroPar % 2);
/* 
c) Testando o programa com diversos números pares, notamos que o resto da divisão sempre será 0. 
   Isso acontece porque um número par é sempre divisível por 2, então o resto da divisão é 0.

d) Se o usuário inserir um número ímpar, o resultado não será mais 0. Em vez disso, será 1, pois um número ímpar
   dividido por 2 deixa um resto de 1. */

Atividade 5

const idadeAnos = parseInt(prompt("Digite sua idade em anos:"));

const idadeMeses = idadeAnos * 12;
const idadeDias = idadeAnos * 365; // Considerando que um ano tem 365 dias
const idadeHoras = idadeDias * 24; // Considerando que um dia tem 24 horas

console.log("a) Idade em meses:", idadeMeses);
console.log("b) Idade em dias:", idadeDias);
console.log("c) Idade em horas:", idadeHoras);

Atividade 6 

const primeiroNumero = parseInt(prompt("Digite o primeiro número:"));
const segundoNumero = parseInt(prompt("Digite o segundo número:"));

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero);
console.log("O primeiro número é divisível pelo segundo?", primeiroNumero % segundoNumero === 0);
console.log("O segundo número é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0);




