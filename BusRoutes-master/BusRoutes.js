var Bus1 = ('Bus 1');
var bus2 = ('Bus 2');
var bus3 = ('Bus 3');
var preg = (prompt('What bus do you ride?'));

preg;
console.log(preg)
if (preg < 2) {
document.write(Bus1);
} else if (preg == 2) {
document.write(bus2);
} else {
document.write(bus3);
};