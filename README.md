# React Slide Pane

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codepen Preview](https://img.shields.io/badge/codepen-preview-brightgreen.svg)](https://codepen.io/turkyden/pen/ExKOmqV)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Slide-Pane React component, can be splited vertically or horizontally to the difference between two images!

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
|  width   |    number     |   `600`    |                  The width of pane component                  |
|  height  |    number     |   `400`    |                 The height of pane component                  |
| initial  |    number / string  |   `200`    | The initial position of resizer |
|  split   |    string     | `vertical` | If split is equal to `horizontally`, the resizer will be horizontally. |
| children | React.Element | `undefied` |                The children of slide pane coms                 |

## Reference

[react-split-pane](https://github.com/tomkp/react-split-pane)

[react-component/slider](https://github.com/react-component/slider)

[react-split-pane-v2](http://react-split-pane-v2.surge.sh/?SimpleExample)

## License

The MIT License (MIT)

Copyright © 2020 Tukyden, https://github.com/Turkyden 
<<wj871287@gmail.com>>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
