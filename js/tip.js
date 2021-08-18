export function createTipCalculator(spec) {
  let {bill, tip} = spec,
    setBill = function(num) {
      bill = num;
    },
    setTip = function(num) {
      tip = num/100;
    },
    getBill = function() {
      return bill;
    },
    getTip = function() {
      return tip;
    },
    roundToCents = function(num) {
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
    tipDecimal = function() {
      const tipDec = roundToCents(bill * tip);
      return tipDec;
    },
    tipAmount = function() {
      return valToCurrency(tipDecimal());
    },
    valToCurrency = function(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
    },
    total = function() {
      const tipToDec = tipDecimal();
      return valToCurrency(bill + tipToDec);
    },
    // Get tip amount from field
    valField = function(field) {
      return parseFloat(field.value) || parseFloat(field.placeholder);
    },
    attachNodeVal = function(element, value) {
      const valCurrency = valToCurrency(value);
      const newText = document.createTextNode(valCurrency);  
    
      // If text node is already there, delete it
      if (element.textContent){
        element.removeChild(element.childNodes[0]);
      }
      element.appendChild(newText);
      return element;
    },
    isValid = function(element) {
      // Convert string into number. If it's a non-numeric string,
      // it'll return 0
      return Number(element.value) ? true : false;
    },
    warningMessage = function(isError, element, 
      message = "Error! Please enter a numeric value") {
        if (isError){
          attachNodeVal(element, message);
          return element;
        }
    }

  return Object.freeze({
      setBill, 
      setTip,
      getBill,
      getTip,
      roundToCents,
      tipAmount,
      total,
      valField,
      attachNodeVal,
      isValid,
      warningMessage
    });
}