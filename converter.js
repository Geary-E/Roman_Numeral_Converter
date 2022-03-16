let inputOne = document.getElementById("number");
let outputOne = document.getElementById("convert");


let obj = {
           1: "I",
           5: "V", 
           10: "X", 
           50: "L", 
           100: "C"
        };

           
function convert() {
        if(inputOne.value == 8) {
            outputOne.value = 'VIII';
        }

        for(const key in obj) {
            if(inputOne.value >= key) {
                outputOne.value = obj[key];
            }
        }
} 

