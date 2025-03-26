/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

import {MColors}  from './colors';

export const toolbox = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Essentials',
        colour: MColors.yellow,
        contents: [
        {
          kind: 'block',
          type: 'proxyThing',
        },
        {
          kind: 'block',
          type: 'set',
          fields: {
            type: 'set'
          }
        },
        {
          kind: 'block',
          type: 'set',
          fields: {
            type: 'setdefault'
          }
        },
        {
          kind: 'block',
          type: 'set',
          fields: {
            type: 'ease'
          }
        },
        {
          kind: 'block',
          type: 'set',
          fields: {
            type: 'add'
          }
        },
        {
          kind: 'block',
          type: 'set',
          fields: {
            type: 'reset'
          }
        }
      ]
    },
    {
      kind: 'category',
      name: 'Mod Stuff',
      colour: MColors.blue,
      contents: [
        
        {
          kind: 'block',
          type: 'beat',
        },
        {
          kind: 'block',
          type: 'lengthEase',
        },
        {
          kind: 'block',
          type: 'amp&mod',
        },
        {
          kind: 'block',
          type: 'mod',
        },
        {
          kind: 'block',
          type: 'exclude',
        },
        {
          kind: 'block',
          type: 'alias'
        },
        {
          kind: 'block',
          type: 'defineMod',
          inputs: {
            mods: {
              shadow: {
                kind: 'block',
                type: 'amp&mod'
              }
            }
          }
        }
      ]
    },
    {
      kind: 'category',
      name: 'Flow',
      colour: MColors.orange,
      contents:
      [
        {
          kind: 'block',
          type: 'if'
        },
        {
          kind: 'block',
          type: 'ifelse'
        },
        {
          kind: 'block',
          type: 'repeat'
        }
      ]
    }
  ]
}