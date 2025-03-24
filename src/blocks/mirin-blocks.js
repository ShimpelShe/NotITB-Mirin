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
        "type": "mod1",
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
      }
    ]);