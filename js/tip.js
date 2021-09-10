export function createTipCalculator(spec) {
  let {bill, tip} = spec,
    setBill = function(num) {
      bill = num;
    },
    setTip = function(num) {
      tip = num;
    },
    getBill = function() {
      return parseFloat(bill);
    },
    getTip = function() {
      return Number(tip);
    },
    roundToCents = function(num) {
      return Math.round((num + Number.EPSILON) * 100) / 100;
    },
    tipDecimal = function() {
      const tipDec = roundToCents(getBill() * (getTip()/100));
      return tipDec;
    },
    valToCurrency = function(value) {
      return value.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
    },
    total = function() {
      const tipToDec = tipDecimal();
      return valToCurrency(getBill() + tipToDec);
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
    calculate = function(tipOutput, totalOutput) {
      const tipTotal = tipDecimal();
      const billTotal = total();
      
      attachNodeVal(tipOutput, tipTotal);
      attachNodeVal(totalOutput, billTotal);
    },
    isValid = function(value) {
      // Convert string into number. If it's a non-numeric string,
      // it'll return 0
      return Number(value) ? true : false;
    },
    warningMessage = function(element, 
      message = "Error! Please enter a numeric value") {
        attachNodeVal(element, message);
        return element;
    }

  return Object.freeze({
      setBill, 
      setTip,
      getBill,
      getTip,
      roundToCents,
      tipDecimal,
      total,
      attachNodeVal,
      calculate,
      isValid,
      warningMessage
    });
}