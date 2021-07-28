/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(firstNumber, secondNumber) {
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
}

Calculator.prototype.sum = function () {
  return this.firstNumber + this.secondNumber;
};

Calculator.prototype.subtraction = function () {
  return this.firstNumber - this.secondNumber;
};

Calculator.prototype.multiplication = function () {
  return this.firstNumber * this.secondNumber;
};

Calculator.prototype.division = function () {
  return this.firstNumber / this.secondNumber;
};
