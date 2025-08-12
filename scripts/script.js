function salaryCalculator() {
    let mainSalary = parseFloat(document.getElementById("salary").value);
    let mill = parseFloat(document.getElementById("mill").value) || 0;
    let petiCash = parseFloat(document.getElementById("petiCash").value) || 0;
    let loan = parseFloat(document.getElementById("loan").value) || 0;
    let numberOfWeekEnd = parseFloat(document.getElementById("weekEnds").value) || 0;

    if (isNaN(mainSalary)) {
        document.getElementById("result").innerHTML = "<div color: red;>⚠ Please Enter Your Salary!</div>";
        document.getElementById("result").style.color = "red";
        return;
    }

    const basicSalary = mainSalary * (60 / 100);
    const oneWeekEndTK = basicSalary / 26;
    const totalWeekEndTK = oneWeekEndTK * numberOfWeekEnd;
    const EVF = mainSalary * (3 / 100);

    document.getElementById("result").style.color = "green";
    const payAble = mainSalary + totalWeekEndTK - EVF - mill - petiCash - loan;


    document.getElementById("result").innerHTML = `<span style="font-size: 12px;">You Will Get : <span style="font-size: 18px;">${payAble.toFixed(2)} tk</span> this Month</span>`
    document.getElementById("extraResult").innerHTML = `<span style="font-size: 12px;">Total Earned : ${(mainSalary + totalWeekEndTK).toFixed(2)} <br> 
    EVF : <span style="color: red;">${EVF.toFixed(2)} tk </span> <br>
    Total WeekEnd : ${totalWeekEndTK.toFixed(2)} tk</span>`
}

