```js script
import { html } from '@open-wc/demoing-storybook';
import '../help-button.js';

export default {
  title: 'HelpButton',
  component: 'help-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# HelpButton

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add help-button
```

```js
import 'help-button/help-button.js';
```

```js preview-story
export const Simple = () => html`
  <help-button></help-button>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <help-button title="Hello World"></help-button>
`;
```
