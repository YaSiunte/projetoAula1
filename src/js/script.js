// declaraçoes e variaveis 
// var, let, const 

// var pode redeclarar e acessar fora do escopo
// let nao pode redeclarar e so acessa dentro do escopo

//var x = 10;
// console.log(x);
//var x = 20;
//console.log(x);
//
//if (true) {
//    var nome = "fiap";
//}
//console.log(nome);

//const taxaJuros = 0.85;
//taxaJuros = 0.5;
//console.log(taxaJuros);

//const exemplo = ["oi"];
//console.log(typeof exemplo);

//let exemplo8;
//console.log(exemplo8);

//let exemplo9=null;
//console.log(exemplo9);


//OPERADORES ARITMETICOS 
/*const valor1=20
const valor2=10

console.log(valor1 + valor2);
console.log(valor1 / valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);

//OPERADORES LOGICOS 

console.log(valor2 > valor1)
console.log(valor1 > 10 && valor2 != 20)
console.log(valor2 < 5 || valor1 > 50)

//OPERADORES DE COMPARAÇAO 

console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);
console.log(valor1 != valor2);
console.log(valor1 == valor2);
console.log(valor1 === valor2);*/

//ESTRUTURA DE REPETIÇÃO (LAÇO DE REPETIÇÃO)

//for - estrutura de repetição utilizada quando sabemos previamente quantas vezes o codigo vai ser executado

// declaração, operação, incremento
for(let i=1; i<=5;i++){
    console.log("Numero:", i);
}

// for para array 

const linguagens = ["Java", "Python", "C#", "PHP"];
for(let i=0; i < linguagens.length;i++){
    console.log("Linguagem", i, ":", linguagens[i]);
}

const tecnologias = ["JS", "HTML", "CSS"]
for(const tech of tecnologias){
    console.log("estudando", tech)
}

const carros = {marca:"Volks", modelo:"Fusca", ano:1980};
for(let dados in carros){
    console.log(dados, ":", carros[dados])
}