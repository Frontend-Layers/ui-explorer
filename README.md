# UI Explorer

[![License:MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://github.com/frontend-layers/ui-explorer/LICENSE)
[![npm](https://img.shields.io/npm/v/ui-explorer.svg)](https://www.npmjs.com/package/ui-explorer)

_UI Explorer for Designers and Frontend Developers_

## Why

Lightweight and cozy frontend tool for development stage to test and visualize page structure

## Features

- Extend visual orientation by show selected HTML regions with predefined outlines
- Test or correct UI in accordance with design by mockup partials integration

## Install

```shell
npm i --save-dev ui-explorer
```

```javascript
import 'ui-explorer';
```

## CDN

```html
<script src="https://unpkg.com/ui-explorer/build/javascript/app.js" defer></script>
```

## Functionality

- Autosave

### Outlines

- Select any DOM element by predefined list
- Color and Width properties
- Outlines glogal or custom Show/Hide
- Keyboard hot keys

### Mockup

- Upload (Drag-n-drop, Paste from URL and clipboard) Images (Limit 2Mb for imported script)
- Preview Images
- Grayscale with contrast
- Crop
- Offset
- Layer level
- Tiles glogal or custom Show/Hide
- Keyboard hot keys
- Magnetize Tile to Page element

### Mockup Offset

- Double click - back image to init position

## Hotkeys

| Keys                        | Action                  |
|-----------------------------|-------------------------|
| <kbd>Ctrl</kbd><kbd>~</kbd> | Show/Hide Outlines      |

### Mockup Hotkeys on active Tile

| Keys                                                 | Action                        |
|------------------------------------------------------|-------------------------------|
| <kbd>0 - 9</kbd>                                     | Opacity Level                 |
| <kbd>Ctrl</kbd><kbd>0 - 9</kbd>                      | Z-Index Level                 |
| <kbd>←</kbd>↓<kbd>↑</kbd><kbd>→</kbd>                | Correct X, Y Position (+1px)  |
| <kbd>Ctrl</kbd><kbd>←</kbd>↓<kbd>↑</kbd><kbd>→</kbd> | Correct X, Y Position (+10px) |

## Contributing

For issues, bugs or imporvements please open an [issue](https://github.com/frontend-layers/ui-explorer/issues/new)
