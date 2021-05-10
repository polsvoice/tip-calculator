(function(){
  const submit_button = document.querySelector("button[name='calculate']")
        , bill = document.querySelector("#bill")
        , tip = document.querySelector("#tip")
        , tip_amount_lb = document.querySelector("label[for='tip-amount']")
        , total_lb = document.querySelector("label[for='total']");
        
  submit_button.addEventListener("click", function(){
    const tip_value = val_field(tip);
    console.log("Tip value = " + tip_value);
  });
})();
