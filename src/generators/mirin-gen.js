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

    const code = "if not P1 or not P2 then\n  backToSongWheel('Two Player Mode Required')\n  return\nend\n\n-- judgment / combo proxies\n\n for pn = 1, 2 do\n  setupJudgeProxy(PJ[pn], P[pn]:GetChild('Judgment'), pn)\n  setupJudgeProxy(PC[pn], P[pn]:GetChild('Combo'), pn)\nend\n\n-- player proxies\n\nfor pn = 1, #PP do\n  PP[pn]:SetTarget(P[pn])\n  P[pn]:hidden(1)\nend\n";
    return code;
};

mirinGenerator.forBlock['set'] = function(block, generator) {
    const dropdown_type = block.getFieldValue('type');
    const value_all = generator.valueToCode(block, 'all', Order.ATOMIC);
  
    const code = dropdown_type + ' {' + value_all + '}';
    return code;
};

mirinGenerator.forBlock['mod1'] = function(block, generator) {
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
}