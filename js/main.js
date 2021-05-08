(function(){
  const submit_button = document.querySelector("button[name='calculate']")
        , bill = document.querySelector("#bill")
        , tip = document.querySelector("#tip")
        , tip_amount_lb = document.querySelector("label[for='tip-amount']")
        , total_lb = document.querySelector("label[for='total']");
        
  submit_button.addEventListener("click", function(){
    console.log("the tip value is " + tip.value);
    const tip_amount_val = tip_amount(tip.value);
    console.log(tip_amount_val);
  });
})();
