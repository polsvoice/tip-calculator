function tip_calc(num){
  return num/100;
}

function round_to_cents(num){
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function tip_amount(bill, tip){
  const tip_decimal = (bill * tip);
  return round_to_cents(tip_decimal);
}

function total(num1, num2){
  return num1 + num2;
}
