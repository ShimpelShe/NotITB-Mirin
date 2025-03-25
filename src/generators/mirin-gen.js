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
}