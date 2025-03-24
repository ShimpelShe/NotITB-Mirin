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
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'proxyThing',
    },
    {
      kind: 'block',
      type: 'set',
    },
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
      type: 'mod1',
    },
  ]
}