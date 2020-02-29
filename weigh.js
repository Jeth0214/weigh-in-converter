let weighFromValue;
let weighToValue;
let test;
let weighFrom = document.getElementById("weighFrom");
let weighTo = document.getElementById("weighTo");
let mass = document.getElementById("mass");

console.log(mass.value);
//get the value of the mass unit to convert
weighFrom.addEventListener("change", function (e) {
    weighFromValue = weighFrom.value;
    console.log(weighFromValue);
});


//get the value of the  desired mass unit
weighTo.addEventListener("change", function () {
    weighToValue = weighTo.value;
    console.log(weighToValue);
});


//get the value of input
mass.addEventListener("input", function () {
    if (weighFromValue === "kilogram" && weighToValue == "ounces") {
        test = mass.value;
        let result = test * 2.20462;
        document.getElementById("output").value = result;
        console.log(test);
        console.log(result);
    }
})




