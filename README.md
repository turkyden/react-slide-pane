# React Slide Pane

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

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
