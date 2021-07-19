export function createTipCalculator(spec) {
  let {bill, tip} = spec,
    setBill = function(num) {
      bill = num;
    },
    setTip = function(num) {
      tip = num;
    },
    convertToDec = function() {
      return tip/100;
    },
    roundToCents = function(num) {
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
    tipAmount = function() {
      const tipAmount = convertToDec();
      const tipDecimal = roundToCents(bill * tipAmount);
      return valToCurrency(tipDecimal);
    },
    valToCurrency = function(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
    }

  return Object.freeze({
      setBill, 
      setTip, 
      convertToDec, 
      roundToCents,
      tipAmount
    });
}

/*




function total(num1, num2){
  return val_to_currency(num1 + num2);
}

// Get tip amount from field
function val_field(field){
  return parseFloat(field.value) || parseFloat(field.placeholder);
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
