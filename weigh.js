let weighFromValue;
let weighToValue;
let weighFrom = document.getElementById("weighFrom");
let weighTo = document.getElementById("weighTo");

weighFrom.addEventListener("change", function(){
    weighFromValue = weighFrom.value;
    console.log(weighFromValue);
}, false);


