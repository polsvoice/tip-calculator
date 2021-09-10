import {createTipCalculator} from "../js/tip.js";

(function(){
  "use strict";
  const form = document.querySelector("#form-calc"),
        bill = document.querySelector("#bill"),
        tip = document.querySelector("#tip"),
        tipAmountOutput = document.querySelector("#tip-amount"),
        totalOutput = document.querySelector("#total");
  let billAmt = bill.value;
  let tipAmt = tip.value || tip.placeholder;
  const tipCalculator = 
    createTipCalculator({bill: billAmt, tip: tipAmt});

  document.querySelector("#bill").addEventListener("input", 
    function() {
      billAmt = bill.value;
      tipCalculator.setBill(billAmt);
      tipCalculator.calculate(tipAmountOutput, totalOutput);
  });
  document.querySelector("#tip").addEventListener("input", 
   function() {
    tipAmt = tip.value || tip.placeholder;
    tipCalculator.setTip(tipAmt);
    tipCalculator.calculate(tipAmountOutput, totalOutput);
  });
})();
