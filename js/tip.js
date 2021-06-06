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
  // Pad with zeroes
  const val_to_currency = value.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2});
  const new_text = document.createTextNode(val_to_currency);  

  // If text node is already there, delete it
  if (element.textContent){
    element.removeChild(element.childNodes[0]);
  }
  element.appendChild(new_text);
  return element;
}

function isValid(element){
  return typeof element.value === 'number' ? true : false;
}