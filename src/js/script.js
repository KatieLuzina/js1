let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let expenses1= prompt("Введите обязательную статью расходов в этом месяце", "");
let expensesSum1= +prompt("Во сколько обойдется?", "");
let expenses2= prompt("Введите обязательную статью расходов в этом месяце", "");
let expensesSum2= +prompt("Во сколько обойдется?", "");
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false
};

appData.expenses1=expensesSum1;
appData.expenses2=expensesSum2;

alert(money/30);