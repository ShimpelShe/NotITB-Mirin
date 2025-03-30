import * as Blockly from 'blockly';
import {MColors}  from '../colors';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        "type": "proxyThing",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Do the proxy thing %1",
        "args0": [
          {
            "type": "input_end_row",
            "name": "label"
          }
        ],
        "nextStatement": null,
        "colour": MColors.red
      },
      {
        "type": "set",
        "tooltip": "",
        "helpUrl": "https://xerool.github.io/mirin-template/docs/set.html",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "Set",
                "set"
              ],
              [
                "Ease",
                "ease"
              ],
              [
                "Add",
                "add"
              ],
              [
                "Reset",
                "reset"
              ],
              [
                "Set Default",
                "setdefault"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "all"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.yellow
      },
      {
        "type": "amp&mod",
        "tooltip": "",
        "helpUrl": "https://xerool.github.io/mirin-template/docs/mods.html",
        "message0": "Amp %1 Mod %2 %3",
        "args0": [
          {
            "type": "field_number",
            "name": "amp",
            "value": 100
          },
          {
            "type": "field_input",
            "name": "mod",
            "text": "Drunk"
          },
          {
            "type": "input_value",
            "name": "next"
          }
        ],
        "output": null,
        "colour": MColors.blue
      },
      {
        "type": "beat",
        "tooltip": "",
        "helpUrl": "https://xerool.github.io/mirin-template/docs/set.html",
        "message0": "On Beat %1 %2",
        "args0": [
          {
            "type": "field_number",
            "name": "beat",
            "value": 1
          },
          {
            "type": "input_value",
            "name": "next"
          }
        ],
        "output": null,
        "colour": MColors.blue
      },
      {
        "type": "lengthEase",
        "tooltip": "",
        "helpUrl": "https://xerool.github.io/mirin-template/docs/eases.html",
        "message0": "Length %1 Ease %2 %3",
        "args0": [
          {
            "type": "field_number",
            "name": "length",
            "value": 1
          },
          {
            "type": "field_input",
            "name": "ease",
            "text": "linear"
          },
          {
            "type": "input_value",
            "name": "next"
          }
        ],
        "output": null,
        "colour": MColors.blue
      },
      {
        "type": "exclude",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Exclude: %1",
        "args0": [
          {
            "type": "input_value",
            "name": "exclude"
          }
        ],
        "output": null,
        "colour": MColors.red
      },
      {
        "type": "mod",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Mod %1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "mod",
            "text": "Drunk"
          },
          {
            "type": "input_value",
            "name": "mod"
          }
        ],
        "output": null,
        "colour": MColors.blue
      },
      {
        "type": "alias",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Alias %1 Mod %2 %3",
        "args0": [
          {
            "type": "field_input",
            "name": "name",
            "text": "BoozeMode"
          },
          {
            "type": "field_input",
            "name": "mod",
            "text": "Drunk"
          },
          {
            "type": "input_end_row",
            "name": "alias"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.purple
      },
      {
        "type": "defineMod",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Name %1 Mods %2",
        "args0": [
          {
            "type": "field_input",
            "name": "name",
            "text": "Drunkenly"
          },
          {
            "type": "input_value",
            "name": "mods"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.purple
      },
      {
        "type": "if",
        "tooltip": "",
        "helpUrl": "",
        "message0": "If %1 Then %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "label0",
            "align": "RIGHT"
          },
          {
            "type": "input_dummy",
            "name": "label1"
          },
          {
            "type": "input_statement",
            "name": "blocks",
            "align": "CENTRE"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.yellow
      },
      {
        "type": "ifelse",
        "tooltip": "",
        "helpUrl": "",
        "message0": "If %1 Then %2 %3 Else %4 %5",
        "args0": [
          {
            "type": "input_value",
            "name": "label0",
            "align": "RIGHT"
          },
          {
            "type": "input_dummy",
            "name": "label1"
          },
          {
            "type": "input_statement",
            "name": "if"
          },
          {
            "type": "input_end_row",
            "name": "label2"
          },
          {
            "type": "input_statement",
            "name": "else"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.yellow
      },
      {
        "type": "repeat",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Repeat %1 .. %2 Stepsize %3 %4",
        "args0": [
          {
            "type": "input_value",
            "name": "start",
            "align": "RIGHT"
          },
          {
            "type": "input_value",
            "name": "end"
          },
          {
            "type": "input_value",
            "name": "step",
            "align": "RIGHT"
          },
          {
            "type": "input_statement",
            "name": "blocks"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.yellow,
        "inputsInline": true
      },
      {
        "type": "equality",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "input0"
          },
          {
            "type": "field_dropdown",
            "name": "sign",
            "options": [
              [
                "=",
                "=="
              ],
              [
                "~=",
                "~="
              ],
              [
                ">=",
                ">="
              ],
              [
                "<=",
                "<="
              ],
              [
                ">",
                ">"
              ],
              [
                "<",
                "<"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "input1"
          }
        ],
        "output": null,
        "colour": MColors.yellow,
        "inputsInline": true
      },
      {
        "type": "andor",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "input0"
          },
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "And",
                "and"
              ],
              [
                "Or",
                "or"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "input1"
          }
        ],
        "output": null,
        "colour": MColors.yellow,
        "inputsInline": true
      },
      {
        "type": "not",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Not %1",
        "args0": [
          {
            "type": "input_value",
            "name": "input0"
          }
        ],
        "output": null,
        "colour": MColors.yellow,
        "inputsInline": true
      },
      {
        "type": "operators",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "input0"
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "+",
                "+"
              ],
              [
                "-",
                "-"
              ],
              [
                "*",
                "*"
              ],
              [
                "/",
                "/"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "input1"
          }
        ],
        "output": null,
        "colour": MColors.orange,
        "inputsInline": true
      },
      {
        "type": "join",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Join %1 & %2",
        "args0": [
          {
            "type": "input_value",
            "name": "input0"
          },
          {
            "type": "input_value",
            "name": "input1"
          }
        ],
        "output": null,
        "colour": MColors.orange,
        "inputsInline": true
      },
      {
        "type": "text",
        "tooltip": "",
        "helpUrl": "",
        "message0": "“ %1 ” %2",
        "args0": [
          {
            "type": "field_input",
            "name": "text",
            "text": "Text"
          },
          {
            "type": "input_end_row",
            "name": "input0"
          }
        ],
        "output": null,
        "colour": MColors.orange,
        "inputsInline": true
      },
      {
        "type": "number",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_number",
            "name": "num",
            "value": 0
          },
          {
            "type": "input_end_row",
            "name": "input0"
          }
        ],
        "output": null,
        "colour": MColors.orange
      },
      {
        "type": "bool",
        "tooltip": "",
        "helpUrl": "",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "bool",
            "options": [
              [
                "True",
                "true"
              ],
              [
                "False",
                "false"
              ]
            ]
          },
          {
            "type": "input_end_row",
            "name": "input0"
          }
        ],
        "output": null,
        "colour": MColors.orange
      },
      {
        "type": "while",
        "tooltip": "",
        "helpUrl": "",
        "message0": "While %1 do %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "input0"
          },
          {
            "type": "input_end_row",
            "name": "label0"
          },
          {
            "type": "input_statement",
            "name": "input1"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.yellow
      },
      {
        "type": "func",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Function %1 %2 At beat %3 %4",
        "args0": [
          {
            "type": "field_input",
            "name": "name",
            "text": "..."
          },
          {
            "type": "input_dummy",
            "name": "input0"
          },
          {
            "type": "input_value",
            "name": "input1"
          },
          {
            "type": "input_statement",
            "name": "input2"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.yellow,
        "inputsInline": true
      },
      {
        "type": "spline",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Set Spline %1 %2 Offset %3 %4 Point %5 Column %6 % %7 Speed %8 %9",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "Type",
            "options": [
              [
                "X",
                "X"
              ],
              [
                "Y",
                "Y"
              ],
              [
                "Z",
                "Z"
              ],
              [
                "Rotation X",
                "RotationX"
              ],
              [
                "Rotation Y",
                "RotationY"
              ],
              [
                "Rotation Z",
                "RotationZ"
              ],
              [
                "Size",
                "Size"
              ],
              [
                "Skew",
                "Skew"
              ],
              [
                "Stealth",
                "Stealth"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "Player",
            "options": [
              [
                "Player 1",
                "P1"
              ],
              [
                "Player 2",
                "P2"
              ]
            ]
          },
          {
            "type": "field_number",
            "name": "ONum",
            "value": 100
          },
          {
            "type": "input_end_row",
            "name": "input0",
            "align": "CENTRE"
          },
          {
            "type": "field_number",
            "name": "PNum",
            "value": 1,
            "precision": 1
          },
          {
            "type": "field_number",
            "name": "CNum",
            "value": -1,
            "min": -1,
            "max": 3,
            "precision": 1
          },
          {
            "type": "field_number",
            "name": "ANum",
            "value": 100
          },
          {
            "type": "field_number",
            "name": "SNum",
            "value": 1
          },
          {
            "type": "input_end_row",
            "name": "input1",
            "align": "CENTRE"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.blue
      },
      {
        "type": "rspline",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Reset Spline %1 %2 %3 Column %4 %5",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "Type",
            "options": [
              [
                "X",
                "X"
              ],
              [
                "Y",
                "Y"
              ],
              [
                "Z",
                "Z"
              ],
              [
                "Rotation X",
                "RotationX"
              ],
              [
                "Rotation Y",
                "RotationY"
              ],
              [
                "Rotation Z",
                "RotationZ"
              ],
              [
                "Size",
                "Size"
              ],
              [
                "Skew",
                "Skew"
              ],
              [
                "Stealth",
                "Stealth"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "Player",
            "options": [
              [
                "Player 1",
                "P1"
              ],
              [
                "Player 2",
                "P2"
              ]
            ]
          },
          {
            "type": "input_end_row",
            "name": "input0"
          },
          {
            "type": "field_number",
            "name": "CNum",
            "value": -1,
            "min": -1,
            "max": 3,
            "precision": 1
          },
          {
            "type": "input_end_row",
            "name": "input1"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.blue
      },
      {
        "type": "for",
        "tooltip": "",
        "helpUrl": "",
        "message0": "For %1 = %2 Do %3 %4",
        "args0": [
          {
            "type": "field_input",
            "name": "val",
            "text": "Thing"
          },
          {
            "type": "input_value",
            "name": "input0"
          },
          {
            "type": "input_end_row",
            "name": "label0"
          },
          {
            "type": "input_statement",
            "name": "input1"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.yellow
      },
      {
        "type": "localvar",
        "tooltip": "",
        "helpUrl": "",
        "message0": "Local Variable %1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "varname",
            "text": "Variable"
          },
          {
            "type": "input_value",
            "name": "input0"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": MColors.purple
      },
    ]);

// We frankensteining now

const onplayers = {
  init: function() {
    this.appendEndRowInput('input0')
      .appendField(new Blockly.FieldNumber(8, 1, 8, 1), 'PNum')
      .appendField('Players');
    let number_pnum = this.getFieldValue('PNum');
    for (let i = 1; i <= number_pnum; i++) {
      this.appendValueInput('input'+i);
    };
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(MColors.blue);
  },
  onchange: function() {
    let number_pnum = this.getFieldValue('PNum');
    for (let i = 1; i <= number_pnum; i++) {
      if (this.getInput('input'+i) != null) {
      } else {
        this.appendValueInput('input'+i);
      }
    };
    for (let i = 7; i >= number_pnum; i--) {
      if (this.getInputWithBlock('input'+i) == null) {
        this.removeInput('input'+i, true);
      }
    };
  }
};
Blockly.common.defineBlocks({onplayers: onplayers});