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
        for(const key in obj) {
            if(inputOne.value == key) {
                outputOne.value = obj[key];
            }
            
            if(inputOne.value != key && inputOne.value != 50 && inputOne.value % 10 == 0) {
                    outputOne.value = 'X';
                for(let i=1; i < (inputOne.value / 10); i++) {
                    outputOne.value += 'X';
                }
            } 
        }
} 

