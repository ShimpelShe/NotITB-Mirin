import * as Blockly from 'blockly';

const Order = {
  ATOMIC: 0,
};

export const mirinGenerator = new Blockly.Generator('mirin');

mirinGenerator.scrub_ = function(block, code, thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !thisOnly) {
      return code + '\n' + mirinGenerator.blockToCode(nextBlock);
    }
    return code;
  };

mirinGenerator.forBlock['proxyThing'] = function(block, generator) {

    const code = "if not P1 or not P2 then\n  backToSongWheel('Two Player Mode Required')\n  return\nend\n\n-- judgment / combo proxies\n\n for pn = 1, 2 do\n  setupJudgeProxy(PJ[pn], P[pn]:GetChild('Judgment'), pn)\n  setupJudgeProxy(PC[pn], P[pn]:GetChild('Combo'), pn)\nend\n\n-- player proxies\n\nfor pn = 1, #PP do\n  PP[pn]:SetTarget(P[pn])\n  P[pn]:hidden(1)\nend\n\n--your code below\n";
    return code;
};

mirinGenerator.forBlock['set'] = function(block, generator) {
    const dropdown_type = block.getFieldValue('type');
    const value_all = generator.valueToCode(block, 'all', Order.ATOMIC);
  
    const code = dropdown_type + ' {' + value_all + '}';
    return code;
};

mirinGenerator.forBlock['amp&mod'] = function(block, generator) {
  const number_amp = block.getFieldValue('amp');
  const text_mod = block.getFieldValue('mod');
  const value_next = generator.valueToCode(block, 'next', Order.ATOMIC);

  if (value_next !== '') {
    var comma = ', ';
  } else {
    var comma = '';
  }

  const code = number_amp + ", '" + text_mod + "'" + comma + value_next;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['beat'] = function(block, generator) {
  const number_beat = block.getFieldValue('beat');
  const value_next = generator.valueToCode(block, 'next', Order.ATOMIC);

  const code = number_beat + ', ' + value_next; 
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['lengthEase'] = function(block, generator) {
  const number_length = block.getFieldValue('length');
  const text_ease = block.getFieldValue('ease');
  const value_next = generator.valueToCode(block, 'next', Order.ATOMIC);

  const code = number_length + ', ' + text_ease + ', ' + value_next;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['exclude'] = function(block, generator) {
  const value_exclude = generator.valueToCode(block, 'exclude', Order.ATOMIC);

  const code = 'exclude = {' + value_exclude + '}';
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['mod'] = function(block, generator) {
  const text_mod = block.getFieldValue('mod');
  const value_mod = generator.valueToCode(block, 'mod', Order.ATOMIC);

  if (value_mod !== '') {
    var next = ', ' + value_mod;
  } else {
    var next = '';
  } 

  const code = "'" + text_mod + "'" + next;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['alias'] = function(block, generator) {
  const text_name = block.getFieldValue('name');
  const text_mod = block.getFieldValue('mod');

  const code = "alias {'" + text_name + "', '" + text_mod + "'}";
  return code;
};

mirinGenerator.forBlock['defineMod'] = function(block, generator) {
  const text_name = block.getFieldValue('name');
  const value_mods = generator.valueToCode(block, 'mods', Order.ATOMIC);

  const code = "definemod {'" + text_name + "', " + value_mods + "}";
  return code;
};

mirinGenerator.forBlock['if'] = function(block, generator) {
  const value_label0 = generator.valueToCode(block, 'label0', Order.ATOMIC);

  const statement_blocks = generator.statementToCode(block, 'blocks');

  const code = 'if (' + value_label0 + ') do {\n' + statement_blocks + '\n}';
  return code;
};

mirinGenerator.forBlock['ifelse'] = function(block, generator) {
  const value_label0 = generator.valueToCode(block, 'label0', Order.ATOMIC);

  const statement_blocks = generator.statementToCode(block, 'if');
  const statement_elseblocks = generator.statementToCode(block, 'else');

  const code = 'if (' + value_label0 + ') do {\n' + statement_blocks + '\n} else {\n' + statement_elseblocks + '\n}';
  return code;
};

mirinGenerator.forBlock['repeat'] = function(block, generator) {
  const value_start = generator.valueToCode(block, 'start', Order.ATOMIC);

  const value_end = generator.valueToCode(block, 'end', Order.ATOMIC);

  const value_step = generator.valueToCode(block, 'step', Order.ATOMIC);

  const statement_blocks = generator.statementToCode(block, 'blocks');

  const code = 'for i = ' + value_start + ', ' + value_end + ', ' + value_step + ' do\n' + statement_blocks + '\nend';
  return code;
};

mirinGenerator.forBlock['operators'] = function(block, generator) {
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);
  const dropdown_name = block.getFieldValue('NAME');
  const value_input1 = generator.valueToCode(block, 'input1', Order.ATOMIC);

  const code = value_input0 + ' ' + dropdown_name + ' ' + value_input1;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['equality'] = function(block, generator) {
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);
  const dropdown_sign = block.getFieldValue('sign');
  const value_input1 = generator.valueToCode(block, 'input1', Order.ATOMIC);

  const code = value_input0 + ' ' + dropdown_sign + ' ' + value_input1;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['andor'] = function(block, generator) {
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);
  const dropdown_type = block.getFieldValue('type');
  const value_input1 = generator.valueToCode(block, 'input1', Order.ATOMIC);

  const code = value_input0 + ' ' + dropdown_type + ' ' + value_input1;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['not'] = function(block, generator) {
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);

  const code = 'not ' + value_input0;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['join'] = function(block, generator) {
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);
  const value_input1 = generator.valueToCode(block, 'input1', Order.ATOMIC);

  const code = value_input0 + value_input1;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['text'] = function(block, generator) {
  const text_text = block.getFieldValue('text');

  const code = "'" + text_text + "'";
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['number'] = function(block, generator) {
  const number_num = block.getFieldValue('num');

  const code = '' + number_num;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['bool'] = function(block, generator) {
  const dropdown_bool = block.getFieldValue('bool');

  const code = '' + dropdown_bool;
  return [code, Order.ATOMIC];
};

mirinGenerator.forBlock['while'] = function(block, generator) {
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);

  const statement_input1 = generator.statementToCode(block, 'input1');

  const code = 'while (' + value_input0 + ') do\n' + statement_input1 + '\nend';
  return code;
};

mirinGenerator.forBlock['func'] = function(block, generator) {
  const text_name = block.getFieldValue('name');

  const value_input1 = generator.valueToCode(block, 'input1', Order.ATOMIC);

  const statement_input2 = generator.statementToCode(block, 'input2');

  const code = 'func {' + value_input1 + ', function(' + text_name + ')\n' + statement_input2 + '\nend}';
  return code;
};

mirinGenerator.forBlock['spline'] = function(block, generator) {
  const dropdown_type = block.getFieldValue('Type');
  const dropdown_player = block.getFieldValue('Player');
  const number_onum = block.getFieldValue('ONum');

  const number_pnum = block.getFieldValue('PNum');
  const number_cnum = block.getFieldValue('CNum');
  const number_anum = block.getFieldValue('ANum');
  const number_snum = block.getFieldValue('SNum');

  const code = dropdown_player + ':Set' + dropdown_type + 'Spline(' + number_pnum + ', ' + number_cnum + ', ' + number_anum + ', ' + number_onum + ', ' + number_snum + ')';
  return code;
};

mirinGenerator.forBlock['rspline'] = function(block, generator) {
  const dropdown_type = block.getFieldValue('Type');
  const dropdown_player = block.getFieldValue('Player');

  const number_cnum = block.getFieldValue('CNum');

  const code = dropdown_player + ':Reset' + dropdown_type + 'Splines(' + number_cnum + ')';
  return code;
};

mirinGenerator.forBlock['for'] = function(block, generator) {
  const text_val = block.getFieldValue('val');
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);

  const statement_input1 = generator.statementToCode(block, 'input1');

  const code = 'for ' + text_val + ' = ' + value_input0 + ' do\n' + statement_input1 + '\nend';
  return code;
};

mirinGenerator.forBlock['localvar'] = function(block, generator) {
  const text_varname = block.getFieldValue('varname');
  const value_input0 = generator.valueToCode(block, 'input0', Order.ATOMIC);

  const code = 'local ' + text_varname + ' = ' + value_input0;
  return code;
};

mirinGenerator.forBlock['onplayers'] = function(block, generator) {
  var onplayerz = '';
  let number_pnum = block.getFieldValue('PNum');
  for (let i = 7; i >= number_pnum; i--) {
    if (block.getInputWithBlock('input'+i) == null) {
      block.removeInput('input'+i, true);
    }
  };
  
  for (let i = 1; i <= number_pnum; i++) {
    let input_val = 'input' + i;
    if (i == number_pnum) {
      var onplayerz = onplayerz + generator.valueToCode(block, 'input8', Order.ATOMIC) + '';
    } else {
      var onplayerz = onplayerz + generator.valueToCode(block, input_val, Order.ATOMIC) + ', ';
    }
  }

  const code = 'plr={' + onplayerz + '}';
  return [code, Order.ATOMIC];
}