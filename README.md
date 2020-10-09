# React Slide Pane

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codepen Preview](https://img.shields.io/badge/codepen-preview-brightgreen.svg)](https://codepen.io/turkyden/pen/ExKOmqV)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Split-Pane React component, can be nested or split vertically or horizontally and diff image! 

[Preview in storybook &rarr;](https://turkyden.github.io/react-slide-pane/)

[![React Slide Pane Demo](./README.gif)](https://turkyden.github.io/react-slide-pane/)

## Usage

[![Edit ReactSlidePane](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/funny-liskov-z7dot?fontsize=14&hidenavigation=1&theme=dark)

```js
import React from 'react'
import ReactDOM from 'react-dom'
import SlidePane from 'react-slide-pane'

ReactDOM.render(
  <>
    <SlidePane width={600} height={400} split="vertical" initial="200px">
      <img src="https://jdc.jd.com/img/600x400?text=1" />
      <img src="https://jdc.jd.com/img/600x400?text=2" />
    </SlidePane>
  </>,
  mountNode
)
```

## API

|   Name   |     Type      |  Default   |                          Description                           |
| :------: | :-----------: | :--------: | :------------------------------------------------------------: |
|  width   |    number     |   `600`    |                  The width of pane conmponent                  |
|  height  |    number     |   `400`    |                 The height of pane conmponent                  |
| initial  |    number / string  |   `200`    | The initial position of resizer |
|  split   |    string     | `vertical` | If split is equal to `horizontally`, the resizer will be horizontally. |
| children | React.Element | `undefied` |                The children of slide pane coms                 |

## Reference

[react-split-pane](https://github.com/tomkp/react-split-pane)

[react-component/slider](https://github.com/react-component/slider)

[react-split-pane-v2](http://react-split-pane-v2.surge.sh/?SimpleExample)

