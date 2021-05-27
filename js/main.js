(function(){
  const submit_button = document.querySelector("#calculate")
        , bill = document.querySelector("#bill")
        , tip = document.querySelector("#tip")
        , tip_amount_lb = document.querySelector("label[for='tip-amount']")
        , total_lb = document.querySelector("label[for='total']");
        
  submit_button.addEventListener("click", function(){
    const bill_amt = val_field(bill);
    const tip_amt = val_field(tip);
    console.log(bill_amt);
    console.log(tip_amt);
  });
})();
