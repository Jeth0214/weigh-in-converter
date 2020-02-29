let weighFromValue;
let weighToValue;
let test = document.querySelectorAll(".test");
let mass = document.getElementById("mass");
let output = document.getElementById("output");

let testOutput = [
    { from: "kilogram", to: "ounce", per1: 35.274 },
    { from: "kilogram", to: "pound", per1: 2.20462 },
    { from: "pound", to: "kilogram", per1: 0.453592 },
    { from: "pound", to: "ounce", per1: 16 },
    { from: "ounce", to: "kilogram", per1: 0.0283495 },
    { from: "ounce", to: "pound", per1: 0.0625 },
]

test.forEach(item => {
    item.addEventListener("change", function () {
        weighFromValue = test[0].value;
        weighToValue = test[1].value
        convertion();
    })
})


//get the value of input and convert it
mass.addEventListener("keyup", convertion);

function convertion(){
    let massInput = mass.value;
    let result = 0;

    testOutput.forEach(el => {
        if (el.from === weighFromValue && el.to === weighToValue) {
            result = massInput * el.per1;
        } else if (weighFromValue === weighToValue) {
            result = massInput
        }
    })
    output.value = result;
}




