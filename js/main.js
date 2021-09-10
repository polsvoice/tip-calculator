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

    const tipTotal = tipCalculator.tipDecimal();
    const billTotal = tipCalculator.total();
    
    tipCalculator.attachNodeVal(tipAmountOutput, tipTotal);
    tipCalculator.attachNodeVal(totalOutput, billTotal);
  });
})();
