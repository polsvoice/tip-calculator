function tip_calc(num){
  return num/100;
}

function round_to_cents(num){
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function tip_amount(bill, tip){
  const tip_amt = tip_calc(tip);
  const tip_decimal = (bill * tip_amt);
  return round_to_cents(tip_decimal);
}

function total(num1, num2){
  return num1 + num2;
}

// Get tip amount from field
function val_field(field){
  return parseFloat(field.value) || parseFloat(field.placeholder);
}

function attach_node_val(element, value){
  const new_text = document.createTextNode(String(value));
  element.appendChild(new_text);
  return element;
}
