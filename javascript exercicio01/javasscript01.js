let firstNumber = prompt("Digite o primeiro número");
let secondNumber = prompt("Digite o segundo número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restdiv = firstNumber % secondNumber;

const numero = sum;
const dif = sum

alert('A soma de dois números é: ' + sum);
alert('A subtração de dois números é: ' + sub);
alert('A multiplicação de dois números é: ' + mult);
alert('A divisão de dois números é: ' + div);
alert('O resto da divisão de dois números é: ' + restdiv);
if (numero % 2 === 0) {
  alert(`a soma dos dois numero é Par : ${numero}`);
} else {
  alert(`a soma dos dois numero é impar : ${numero}`);
}
if (firstNumber === secondNumber)
 {
  alert(`Os numeros definidos são igual `);
} else {
  alert(`Os numeros definidos são diferente `);
}
