(function(){
  const submit_button = document.querySelector("#calculate")
        , bill = document.querySelector("#bill")
        , tip = document.querySelector("#tip")
        , tip_amount_output = document.querySelector("#tip-amount")
        , total_output = document.querySelector("#total");
        
  submit_button.addEventListener("click", function(){
    const bill_amt = val_field(bill);
    const tip_amt = val_field(tip);
    const tip_total = tip_amount(bill_amt, tip_amt);
    const bill_total = total(bill_amt, tip_total);
    
    attach_node_val(tip_amount_output, tip_total);
    attach_node_val(total_output, bill_total);
  });
})();
