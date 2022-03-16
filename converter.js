let inputOne = document.getElementById("number");
let outputOne = document.getElementById("convert");


let obj = {
           1: "I",
           4: "IV",
           5: "V",
           9: "IX", 
           10: "X",
           14: "XIV",
           19: "XIX",
           24: "XXIV",
           29: "XXIX",
           34: "XXXIV",
           39: "XXXIX",
           40: "XL",
           44: "XLIV",
           49: "XLIX", 
           50: "L", 
           54: "LIV",
           59: "LIX",
           64: "LXIV",
           69: "LXIX",
           74: "LXXIV",
           79: "LXXIX",
           84: "LXXXIV",
           89: "LXXXIX",
           90: "XC",
           94: "XCIV",
           99: "XCIX",
           100: "C"
        };

           
function convert() {
        for(const key in obj) {
            if(inputOne.value == key) {
                outputOne.value = obj[key];
            }
            else {
                if(inputOne.value % 10 == 0 && inputOne.value != 40 && inputOne.value != 90) {
                    if(inputOne.value > 50) {
                        outputOne.value = 'L';
                        for(let i=0; i < ((inputOne.value-50) / 10); i++) {
                            outputOne.value += 'X';
                        }
                    }
                    else if(inputOne.value < 50) {
                        outputOne.value = 'X';
                        for(let i=1; i < (inputOne.value / 10); i++) {
                            outputOne.value += 'X';
                        }
                    }
                }
                if(inputOne.value % 5 == 0 && inputOne.value != obj[key]) {
                    if(inputOne.value > 10 && inputOne.value < 20) {
                        outputOne.value = 'XV';
                    }
                    if(inputOne.value > 20 && inputOne.value < 30) {
                        outputOne.value = 'XXV';
                    }
                    if(inputOne.value > 30 && inputOne.value < 40) {
                        outputOne.value = 'XXXV';
                    }
                    if(inputOne.value > 40 && inputOne.value < 50) {
                        outputOne.value = 'XLV';
                    }
                    if(inputOne.value > 50 && inputOne.value < 60) {
                        outputOne.value = 'LV';
                    }
                    if(inputOne.value > 60 && inputOne.value < 70) {
                        outputOne.value = 'LXV';
                    }
                    if(inputOne.value > 70 && inputOne.value < 80) {
                        outputOne.value = 'LXXV';
                    }
                    if(inputOne.value > 80 && inputOne.value < 90) {
                        outputOne.value = 'LXXXV';
                    }
                    if(inputOne.value > 90 && inputOne.value < 100) {
                        outputOne.value = 'XCV';
                    }
                }
            }
        }
} 

