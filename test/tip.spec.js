describe("Tip Calculator", function(){
  it("converts the tip percentage to decimal", function(){
    expect(tip_calc(15)).toEqual(.15);
    expect(tip_calc(5)).toEqual(.05);
  });
  it("rounds to two decimal places", function(){
    expect(round_to_cents(1.2345)).toEqual(1.23);
    expect(round_to_cents(1.77777777)).toEqual(1.78);
    expect(round_to_cents(57.6100051)).toEqual(57.61);
  
  });
  it("computes the tip amount", function(){
    expect(tip_amount(3.57, .15)).toEqual(.54);
    expect(tip_amount(17.26, .22)).toEqual(3.8);
  });
  it("computes the total amount", function(){
    expect(total(10.23, 4.56)).toEqual(14.79);
    expect(total(0.66, .11)).toEqual(0.77);
  });
});

describe("Tip Calculator UI", function(){
  let field = document.createElement('input');
  field.placeholder = 15;
  
  it("extracts the value from the form field", function(){
    expect(tip_val_field(field)).toEqual(15);
  });
});
