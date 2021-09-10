import {createTipCalculator} from "../js/tip.js";

(function(){
  "use strict";
  const form = document.querySelector("#form-calc"),
        bill = document.querySelector("#bill"),
        tip = document.querySelector("#tip"),
        tipAmountOutput = document.querySelector("#tip-amount"),
        totalOutput = document.querySelector("#total");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const billAmt = bill.value;
    const tipAmt = tip.value || tip.placeholder;
    const tipCalculator = 
      createTipCalculator({bill: billAmt, tip: tipAmt});
    console.log(`The value of the tip is ${tipAmt}`);
    console.log(`The value of the bill is ${billAmt}`);

    const tipTotal = tipCalculator.tipDecimal();
    const billTotal = tipCalculator.total();

    console.log(`The value of the tip decimal is ${tipTotal}`);
    console.log(`The value of the bill total is ${billTotal}`);
    
    tipCalculator.attachNodeVal(tipAmountOutput, tipTotal);
    tipCalculator.attachNodeVal(totalOutput, billTotal);
  });
})();
