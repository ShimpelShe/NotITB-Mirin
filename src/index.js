/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks} from './blocks/mirin-blocks';
import {mirinGenerator} from './generators/mirin-gen';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
import './renderers/NotITB';

// Import plugins

import {Backpack} from '@blockly/workspace-backpack';
import {ZoomToFitControl} from '@blockly/zoom-to-fit';
import {
  ScrollOptions,
  ScrollBlockDragger,
  ScrollMetricsManager,
} from '@blockly/plugin-scroll-options';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox,
  grid:
         {spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true},
     trashcan: true,
     move:{
      scrollbars: {
        horizontal: true,
        vertical: true
      },
      drag: true,
      wheel: false},
      zoom:
         {controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true},
      collapse: true,
      comments: true,
      renderer: 'NotITB',
      plugins: {
        blockDragger: ScrollBlockDragger,
        metricsManager: ScrollMetricsManager,
      },
});

// Initialize & Configure Plugins

const backoptions = {
  allowEmptyBackpackOpen: false,
  useFilledBackpackImage: true,
  contextMenu: {
    emptyBackpack: true,
    removeFromBackpack: true,
    copyToBackpack: true,
    copyAllToBackpack: true,
    pasteAllToBackpack: true
  }
}

const backpack = new Backpack(ws, backoptions);
backpack.init();

const zoomToFit = new ZoomToFitControl(ws);
zoomToFit.init();

const plugin = new ScrollOptions(ws);
plugin.init();

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
// This function resets the code div and shows the
// generated code from the workspace.
const runCode = () => {
  const code = mirinGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
};

// Load the initial state from storage and run the code.
load(ws);
runCode();

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
