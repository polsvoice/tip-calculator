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
    },
    total = function(num1, num2){
      return valToCurrency(num1 + num2);
    },
    // Get tip amount from field
    valField = function(field){
      return parseFloat(field.value) || parseFloat(field.placeholder);
    },
    attachNodeVal = function(element, value){
      const newText = document.createTextNode(value);  
    
      // If text node is already there, delete it
      if (element.textContent){
        element.removeChild(element.childNodes[0]);
      }
      element.appendChild(newText);
      return element;
    }

  return Object.freeze({
      setBill, 
      setTip, 
      convertToDec, 
      roundToCents,
      tipAmount,
      total,
      valField,
      attachNodeVal
    });
}

/*
function isValid(element){
  // convert string into number. If it's a non-numeric string,
  // it'll return 0
  return Number(element.value) ? true : false;
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
