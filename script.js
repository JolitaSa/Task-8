/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  sum(firstNumber, secondNumber) {
    this.result = firstNumber + secondNumber;
  }

  subtraction(firstNumber, secondNumber) {
    this.result = firstNumber - secondNumber;
  }

  multiplication(firstNumber, secondNumber) {
    this.result = firstNumber * secondNumber;
  }

  division(firstNumber, secondNumber) {
    this.result = firstNumber / secondNumber;
  }
}
