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
        "colour": MColors.orange
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
        "colour": MColors.orange
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
        "colour": MColors.orange,
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
        "colour":MColors.orange,
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
        "colour": MColors.orange,
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
        "colour": MColors.orange,
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
        "colour": MColors.green,
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
        "colour": MColors.green,
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
        "colour": MColors.green
      }
    ]);