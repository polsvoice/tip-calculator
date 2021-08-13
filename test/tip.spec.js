import {createTipCalculator} from "../js/tip.js";

const tipCalculator = createTipCalculator(0, 0);

describe("Tip Calculator", function(){
  it("converts the tip percentage to decimal", function(){
    tipCalculator.setTip(15);
    expect(tipCalculator.convertToDec()).toEqual(.15);
    tipCalculator.setTip(5);
    expect(tipCalculator.convertToDec()).toEqual(.05);
  });
  it("rounds to two decimal places", function(){
    expect(tipCalculator.roundToCents(1.2345)).toEqual(1.23);
    expect(tipCalculator.roundToCents(1.77777777)).toEqual(1.78);
    expect(tipCalculator.roundToCents(57.6100051)).toEqual(57.61);
  
  });
  it("computes the tip amount", function(){
    tipCalculator.setBill(3.57);
    tipCalculator.setTip(15);
    expect(tipCalculator.tipAmount()).toEqual("$0.54");
    tipCalculator.setBill(17.26);
    tipCalculator.setTip(22);
    expect(tipCalculator.tipAmount()).toEqual("$3.80");
  });
  it("computes the total amount", function(){
    expect(tipCalculator.total(10.23, 4.56)).toEqual("$14.79");
    expect(tipCalculator.total(0.66, .11)).toEqual("$0.77");
  });
});

describe("Tip Calculator Input", function(){
  let field = document.createElement("input");
  field.placeholder = 15;
  
  beforeEach(function(){
    field.value = undefined;
  });
  
  it("retrieves the placeholder value", function(){
    expect(tipCalculator.valField(field)).toEqual(15);
  });
  it("retrieves a custom value", function(){
    field.value = 20;
    expect(tipCalculator.valField(field)).toEqual(20);
  });
  it("retrieves a floating point number", function(){
    field.value = 17.25;
    expect(tipCalculator.valField(field)).toEqual(17.25);
  });
});

describe("Tip Calculator Output", function(){
  let label = document.createElement("span");

  it("attaches text output", function(){
    tipCalculator.attachNodeVal(label, "$6.55");
    expect(label.textContent).toEqual("$6.55");
  });
  it("flushes prior text output", function(){
    tipCalculator.attachNodeVal(label, "$5.03");
    expect(label.textContent).toEqual("$5.03");
  });
  it("converts to currency", function(){
    expect(tipCalculator.attachNodeVal(label, 5.36).textContent).toEqual("$5.36");
    expect(tipCalculator.attachNodeVal(label, 0.1).textContent).toEqual("$0.10");
    expect(tipCalculator.attachNodeVal(label, .5).textContent).toEqual("$0.50");
    expect(tipCalculator.attachNodeVal(label, 100).textContent).toEqual("$100.00");
  })
});

describe("Form Validation", function(){
  let dummyInput = document.createElement("input"),
      warningOutput = document.createElement("span");
  dummyInput.type = "number";

  it("rejects letters", function(){
    dummyInput.value = "AbCdE";
    expect(tipCalculator.isValid(dummyInput)).toBe(false);
  });

  it("rejects non-numeric characters", function(){
    dummyInput.value = "\+/{}";
    expect(tipCalculator.isValid(dummyInput)).toBe(false);
  });

  it("accepts floating-point numbers", function(){
    dummyInput.value = 5.35;
    expect(tipCalculator.isValid(dummyInput)).toBe(true);
  });

  it("accepts numbers as strings", function(){
    dummyInput.value = "5.35";
    expect(tipCalculator.isValid(dummyInput)).toBe(true);
  });

  it("returns error message", function(){
    warning_message(true, tipCalculator.warningOutput);
    expect(tipCalculator.warningOutput.textContent).toEqual("Error! Please enter a numeric value");
  });

  xit("returns error message for invalid input", function(){
    dummy_input.value = "asthousth";
    expect(warning_output.textContent).toEqual("Error! Please enter a numeric value");
  });
});