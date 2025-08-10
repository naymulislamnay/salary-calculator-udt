function salaryCalculator() {
    let mainSalary = parseFloat(document.getElementById("salary").value);
    let mill = parseFloat(document.getElementById("mill").value) || 0;
    let petiCash = parseFloat(document.getElementById("petiCash").value) || 0;
    let loan = parseFloat(document.getElementById("loan").value) || 0;
    let numberOfWeekEnd = parseFloat(document.getElementById("weekEnds").value) || 0;

    if (isNaN(mainSalary)) {
        document.getElementById("result").innerHTML = "⚠ Please Enter Your Salary!";
        return;
    }

    const basicSalary = mainSalary * (60 / 100);
    const oneWeekEndTK = basicSalary / 26;
    const totalWeekEndTK = oneWeekEndTK * numberOfWeekEnd;
    const EVF = mainSalary * (3 / 100);

    const payAble = mainSalary + totalWeekEndTK - EVF - mill - petiCash - loan;


    document.getElementById("result").innerHTML = `You Get Total : ${payAble.toFixed(2)} tk this Month`
    document.getElementById("extraResult").innerHTML = `EVF : ${EVF.toFixed(2)} tk <br>
    Total WeekEnd : ${totalWeekEndTK.toFixed(2)} tk`
}

