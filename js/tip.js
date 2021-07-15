export function createTipCalculator(spec) {
  let {bill, tip} = spec,
    setTip = function(num) {
      tip = num;
    },
    convertToDec = function(num) {
      return num/100;
    }

  return Object.freeze(
    {setTip, convertToDec}
  );
}

/* function tip_calc(num){
  return num/100;
}

function round_to_cents(num){
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function tip_amount(bill, tip){
  const tip_amt = tip_calc(tip);
  const tip_decimal = round_to_cents(bill * tip_amt);
  return val_to_currency(tip_decimal);
}

function total(num1, num2){
  return val_to_currency(num1 + num2);
}

// Get tip amount from field
function val_field(field){
  return parseFloat(field.value) || parseFloat(field.placeholder);
}

function val_to_currency(value){
  return value.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
}

function isValid(element){
  // convert string into number. If it's a non-numeric string,
  // it'll return 0
  return Number(element.value) ? true : false;
}

function attach_node_val(element, value){
  const new_text = document.createTextNode(value);  

  // If text node is already there, delete it
  if (element.textContent){
    element.removeChild(element.childNodes[0]);
  }
  element.appendChild(new_text);
  return element;
}

function isValid(element){
  // convert string into number. If it's a non-numeric string,
  // it'll return 0
  return Number(element.value) ? true : false;
}

function warning_message(isError, element, message = "Error! Please enter a numeric value"){
  if (isError){
    attach_node_val(element, message);
  }
}

 */
