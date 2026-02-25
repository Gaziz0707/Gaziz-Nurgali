function calculateMoney() {

            // значений
    let name = document.getElementById("name").value;
    let income = Number(document.getElementById("income").value);
    let expenses = Number(document.getElementById("expenses").value);
    let savings = Number(document.getElementById("savings").value);

    let resultDiv = document.getElementById("result");

   
    if (name === "" || income === 0 && document.getElementById("income").value === "" ||
        expenses === 0 && document.getElementById("expenses").value === "" ||
        savings === 0 && document.getElementById("savings").value === "") {

        resultDiv.innerHTML = "Please fill in all fields.";
        return;
    }

        // отриц. числа
    if (income < 0 || expenses < 0 || savings < 0) {
        resultDiv.innerHTML = "Values cannot be negative.";
        return;
    }

    
    if (income === 0) {
        resultDiv.innerHTML = "Income must be greater than zero.";
        return;
    }

              // формулы итд
    let balance = income - expenses;
    let savingRate = (savings / income) * 100;

    savingRate = savingRate.toFixed(2);

    let category = "";

          // логика работы
    if (savingRate < 5) {
        category = "Poor saving habits";
    } 
    else if (savingRate >= 5 && savingRate < 10) {
        category = "Good financial management";
    } 
    else {
        category = "Excellent financial discipline";
    }

    // вывод
    resultDiv.innerHTML =
        "Hello, " + name + "!<br><br>" +
        "Your monthly balance is: $" + balance + "<br>" +
        "Your saving rate is: " + savingRate + "%<br>" +
        "Financial status: " + category + "<br><br>" +
        (balance < 0 ? "Warning: You are spending more than you earn." : "You have a positive monthly balance.");
}
