/*1.Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os número de 1 até o número que você enviou*/

// function repeti(number){
//     for(let i = 1;i <= number; i++ ){
//         console.log(i)
//     }
// }
// repeti(8)
// const repeti = (number) => {
//     for(let i = 1;i <= number; i++ ){
//                 console.log(i)
//      }
// }
// repeti(6)


/*2.Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.*/

// function tabuada(number) {
//     for(let i = 0; i <=10; i++){
//     console.log(number + "x" + i + " " + "=" + number * i)
//     }
// }

// tabuada(5)
// const tabuada = (number) => {
//     if(number > 10 || number < 1){
//         console.log(`Aceitamos SOMENTE números entre 1 e 10`)
//         return
//     }
//     for(i = 1; i <=10; i++){
//             console.log(`${number} x ${i} = ${number * i}`)
//        }
// }

// tabuada(4)

/*3.Escreva um programa onde, você chame uma função, e ela diga a hora exata!*/

// console.log(new Date().toLocaleTimeString('pt-BR'))
// console.log(new Date().getMonth()+1)


/*4.Escreva um programa onde, você chame uma função, e ela diga que ano estamos!*/
//  console.log(new Date().getFullYear())

/*5.Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior*/

// function maior(number1,number2){
//     if(number1 > number2){
//         return `O maior é ${number1}`
//     }else {
//         return `O maior é ${number2}`
//     }
// }

// console.log(maior(10,9))

// const numbers = (number1,number2) => {
//     if(number1 > number2) console.log(`O priemiro é maior`)
//     else console.log(`O segundo é maior`)
// }
// numbers(9,15)

/*6.A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!*/



/*7.Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.*/


/*8.Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.*/

// function calculate( valorInicial, valorAtual, tempo){
//     const juros = (valorAtual - valorInicial) / (valorInicial * tempo)
//     console.log((juros * 100).toFixed(2) + '%')
// }
// calculate(1500,2500,10)

/*1.Escreva um programa onde, você cria uma função geradora de desconto.*/


/*2.A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)*/

/*3.Os descontos funcionam da seguinte forma:

4.Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto

5.Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto

6.Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%.

7.Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto.

8.Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%.

9.Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto

10.Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto.

11.Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%.

12.Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto.

13.Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:

14.Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.

15.Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.*/


function calculoDeDesconto(nome,valor,primeiraCompra,pagamentoAVista){
    
    if(primeiraCompra && pagamentoAVista){
        
        if(valor > 1000){ console.log(`${nome} você recebeu um desconto de 30% Total R$ ${valor * 0.70}`)}
        else if(valor < 1000 && valor > 500){console.log(`Você recebeu um desconto de 25% Total R$ ${valor * 0.75}`)}
    }

    if(primeiraCompra && !pagamentoAVista){
        
    }

    if(!primeiraCompra && pagamentoAVista){
        
    }

    if(!primeiraCompra && !pagamentoAVista){
        
    }
}
calculoDeDesconto(flavio,1500,primeiraCompra<pagamentoAVista)



