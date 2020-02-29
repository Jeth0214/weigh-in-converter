let weighFromValue;
let weighToValue;
//let weighFrom = document.getElementById("weighFrom");
//let weighTo = document.getElementById("weighTo");
let test = document.querySelectorAll(".test");
let mass = document.getElementById("mass");
let testOutput = [
    {from: "kilograms", to: "ounce", per1 : 35.274},
    {from: "kilograms", to: "pound", per1 : 2.20462},
    {from: "pound", to: "kilogram", per1 : 0.453592},
    {from: "pound", to: "ounce", per1 : 16},
    {from: "ounce", to: "kilogram", per1 : 0.0283495},
    {from: "ounce", to: "pound", per1 : 0.0625},
]

function mode(){
    for(let i = 0; i < test.length; i++){
        test[i].addEventListener("change", function(){
            weighFromValue = test[0].value;
            weighToValue = test[1].value
        });
    };
    console.log(weighFromValue);
    console.log(weighToValue);
}

mode();
/*
//get the value of the mass unit to convert
 weighFrom.addEventListener("change", async function () {
    weighFromValue = await weighFrom.value;
    console.log(weighFromValue);
});


//get the value of the  desired mass unit
weighTo.addEventListener("change",async function () {
    weighToValue = await weighTo.value;
    console.log(weighToValue);
});
*/

//get the value of input
mass.addEventListener("input", async function () {
    await console.log(mass.value);
    let massInput = await mass.value;
    let result;
    await testOutput.forEach( el => {
        if(el.from === weighFromValue && el.to === weighToValue){
            
            result = massInput * el.per1;
        }
    })
    document.getElementById("output").value = result;
        console.log(massInput);
        console.log(result);
});




