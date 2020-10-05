# React Slide Pane

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Codepen Preview](https://img.shields.io/badge/code-pen-brightgreen.svg)](https://codepen.io/turkyden/pen/ExKOmqV)

```js
import SlidePane from 'react-slide-pane'

ReactDOM.render(
  <>
    <SlidePane
      initialWidth={600}
      initialHeight={400}
      split="vertical"
      initialSize="200px"
    >
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
|  split   |    string     | `vertical` | If split is equal to `vertical`, the resizer will be vertical. |
| children | React.Element |  undefied  |                The children of slide pane coms                 |

## Reference

[react-split-pane](https://github.com/tomkp/react-split-pane)

[react-component/slider](https://github.com/react-component/slider)

[react-split-pane-v2](http://react-split-pane-v2.surge.sh/?SimpleExample)
