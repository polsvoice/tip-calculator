describe('Tip Calculator', function(){
  it('converts the tip percentage to decimal', function(){
    expect(tip_calc(15)).toEqual(.15);
    expect(tip_calc(5)).toEqual(.05);
  });
  it('rounds to two decimal places', function(){
    expect(round_to_cents(1.2345)).toEqual(1.23);
    expect(round_to_cents(1.77777777)).toEqual(1.78);
    expect(round_to_cents(57.6100051)).toEqual(57.61);
  
  });
  it('computes the tip amount', function(){
    expect(tip_amount(3.57, 15)).toEqual('$0.54');
    expect(tip_amount(17.26, 22)).toEqual('$3.80');
  });
  it('computes the total amount', function(){
    expect(total(10.23, 4.56)).toEqual('$14.79');
    expect(total(0.66, .11)).toEqual('$0.77');
  });
});

describe('Tip Calculator Input', function(){
  let field = document.createElement('input');
  field.placeholder = 15;
  
  beforeEach(function(){
    field.value = undefined;
  });
  
  it('retrieves the placeholder value', function(){
    expect(val_field(field)).toEqual(15);
  });
  it('retrieves a custom value', function(){
    field.value = 20;
    expect(val_field(field)).toEqual(20);
  });
  it('retrieves a floating point number', function(){
    field.value = 17.25;
    expect(val_field(field)).toEqual(17.25);
  });
});

describe('Tip Calculator Output', function(){
  let label = document.createElement('span');

  it('attaches text output', function(){
    attach_node_val(label, '$6.55');
    expect(label.textContent).toEqual('$6.55');
  });
  it('flushes prior text output', function(){
    attach_node_val(label, '$5.03');
    expect(label.textContent).toEqual('$5.03');
  });
  it('converts to currency', function(){
    expect(val_to_currency(5.36)).toEqual('$5.36');
    expect(val_to_currency(0.1)).toEqual('$0.10');
    expect(val_to_currency(.5)).toEqual('$0.50');
    expect(val_to_currency(100)).toEqual('$100.00');
  })
});

describe('Form Validation', function(){
  let dummy_input = document.createElement('input')
    , warning_output = document.createElement('span');
  dummy_input.type = 'number';

  it('rejects letters', function(){
    dummy_input.value = 'AbCdE';
    expect(isValid(dummy_input)).toBe(false);
  });

  it('rejects non-numeric characters', function(){
    dummy_input.value = '\+/{}';
    expect(isValid(dummy_input)).toBe(false);
  });

  it('accepts floating-point numbers', function(){
    dummy_input.value = 5.35;
    expect(isValid(dummy_input)).toBe(true);
  });

  it('accepts numbers as strings', function(){
    dummy_input.value = '5.35';
    expect(isValid(dummy_input)).toBe(true);
  });

  it('returns error message', function(){
    warning_message(true, warning_output);
    expect(warning_output.textContent).toEqual('Error! Please enter a numeric value');
  });

  it('returns error message for invalid input', function(){
    tip_amount('asthousth');
    expect(warning_output.textContent).toEqual('Error! Please enter a numeric value');
  });
});