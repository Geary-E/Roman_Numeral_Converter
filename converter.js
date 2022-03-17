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
                else {
                    if(inputOne.value > 1 && inputOne.value < 4) {
                        outputOne.value = 'I';
                        let nums = inputOne.value - 1;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 5 && inputOne.value < 9) {
                        outputOne.value = 'V';
                        let nums = inputOne.value - 5;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 10 && inputOne.value < 14) {
                        outputOne.value = 'X';
                        let nums = inputOne.value - 10;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 15 && inputOne.value < 19) {
                        outputOne.value = 'XV';
                        let nums = inputOne.value - 15;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 20 && inputOne.value < 24) {
                        outputOne.value = 'XX';
                        let nums = inputOne.value - 20;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 25 && inputOne.value < 29) {
                        outputOne.value = 'XXV';
                        let nums = inputOne.value - 25;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 30 && inputOne.value < 34) {
                        outputOne.value = 'XXX';
                        let nums = inputOne.value - 30;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 35 && inputOne.value < 39) {
                        outputOne.value = 'XXXV';
                        let nums = inputOne.value - 35;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 40 && inputOne.value < 44) {
                        outputOne.value = 'XL';
                        let nums = inputOne.value - 40;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 45 && inputOne.value < 49) {
                        outputOne.value = 'XLV';
                        let nums = inputOne.value - 45;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 50 && inputOne.value < 54) {
                        outputOne.value = 'L';
                        let nums = inputOne.value - 50;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 55 && inputOne.value < 59) {
                        outputOne.value = 'LV';
                        let nums = inputOne.value - 55;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 60 && inputOne.value < 64) {
                        outputOne.value = 'LX';
                        let nums = inputOne.value - 60;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 65 && inputOne.value < 69) {
                        outputOne.value = 'LXV';
                        let nums = inputOne.value - 65;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 70 && inputOne.value < 74) {
                        outputOne.value = 'LXX';
                        let nums = inputOne.value - 70;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 75 && inputOne.value < 79) {
                        outputOne.value = 'LXXV';
                        let nums = inputOne.value - 75;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 80 && inputOne.value < 84) {
                        outputOne.value = 'LXXX';
                        let nums = inputOne.value - 80;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 85 && inputOne.value < 89) {
                        outputOne.value = 'LXXXV';
                        let nums = inputOne.value - 85;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 90 && inputOne.value < 94) {
                        outputOne.value = 'XC';
                        let nums = inputOne.value - 90;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                    }
                    if(inputOne.value > 95 && inputOne.value < 99) {
                        outputOne.value = 'XCV';
                        let nums = inputOne.value - 95;
                        for(let i=0; i < nums; i++) {
                            outputOne.value += 'I';
                        }
                        }
                    }
                }
            }
    } 

