- Copyright (c) Colibri SAS - ManoMano
- This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.

## ManoMano Toolkit

Demo NOT available anymore

---

### Minimum Requirements

| React | React-DOM | Node |
| ----- | --------- | ---- |
| 16.4  | 16.4      | 8.9  |

<br />

### Installation

`yarn add @core/toolkit`

or

`npm install @core/toolkit --save`

<br/>

### Usage

`import { component } from '@core/toolkit';`

### Warning

Some components have external dependencies that increase the final bundle size.

- React-table(41.29KB)

  - Table

- React-Spring(31.79KB)
  - Alert
  - HeightTransition
  - Modal
  - OptionContainer
  - Overlay
  - Stepper
  - Tabs
  - TabBody
  - ToggleDown
  - Tooltip

### Publish

This project is using _gitlab-ci-node-package-template_ publication process,
refer to the [documentation here](https://manomano.atlassian.net/wiki/spaces/CORE/pages/1332805867/gitlab-ci-node-package-template+Publication+Process+-+with+Semantic-Release)
to better understand how semantic release works.
