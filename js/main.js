import {createTipCalculator} from "../js/tip.js";

(function(){
  "use strict";
  const tipCalculator = createTipCalculator({bill: 0, tip: 0}),
        submitButton = document.querySelector("#calculate"),
        bill = document.querySelector("#bill"),
        tip = document.querySelector("#tip"),
        tipAmountOutput = document.querySelector("#tip-amount"),
        totalOutput = document.querySelector("#total");

  console.log(`The bill is ${tipCalculator.getBill()}`);
  submitButton.addEventListener("click", function(){
    const billAmt = tipCalculator.valField(bill);
    const tipAmt = tipCalculator.valField(tip);
    tipCalculator.setBill(billAmt);
    tipCalculator.setTip(tipAmt);

    const tipTotal = tipCalculator.tipAmount();
    const billTotal = tipCalculator.total();

/*     console.log(`billAmt: ${billAmt}`);
    console.log(`tipAmt: ${tipAmt}`);
    console.log(`tipTotal: ${tipTotal}`);
    console.log(`billTotal: ${billTotal}`); */
    tipCalculator.attachNodeVal(tipAmountOutput, tipTotal);
    tipCalculator.attachNodeVal(totalOutput, billTotal);
  });
})();
