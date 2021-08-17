import {createTipCalculator} from "../js/tip.js";

(function(){
  "use strict";
  const tipCalculator = createTipCalculator({bill: 0, tip: 0});
  const submitButton = document.querySelector("#calculate")
        , bill = document.querySelector("#bill")
        , tip = document.querySelector("#tip")
        , tipAmountOutput = document.querySelector("#tip-amount")
        , totalOutput = document.querySelector("#total");
        
  submitButton.addEventListener("click", function(){
    const billAmt = tipCalculator.valField(bill);
    const tipAmt = tipCalculator.valField(tip);
    const tipTotal = tipCalculator.tipAmount();
    const billTotal = tipCalculator.total(billAmt, tipTotal);
    console.log(`billAmt: ${billAmt}`);
    console.log(`tipAmt: ${tipAmt}`);
    console.log(`tipTotal: ${tipTotal}`);
    console.log(`billTotal: ${billTotal}`);
    tipCalculator.attachNodeVal(tipAmountOutput, tipTotal);
    tipCalculator.attachNodeVal(totalOutput, billTotal);
  });
})();
