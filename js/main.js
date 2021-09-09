import {createTipCalculator} from "../js/tip.js";

(function(){
  "use strict";
  const tipCalculator = createTipCalculator({bill: 0, tip: 0}),
        form = document.querySelector("#form-calc"),
        bill = document.querySelector("#bill"),
        tip = document.querySelector("#tip"),
        tipAmountOutput = document.querySelector("#tip-amount"),
        totalOutput = document.querySelector("#total");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const billAmt = tipCalculator.valField(bill);
    const tipAmt = tipCalculator.valField(tip);
    tipCalculator.setBill(billAmt);
    tipCalculator.setTip(tipAmt);

    const tipTotal = tipCalculator.tipAmount();
    const billTotal = tipCalculator.total();

    tipCalculator.attachNodeVal(tipAmountOutput, tipTotal);
    tipCalculator.attachNodeVal(totalOutput, billTotal);
  });
})();
