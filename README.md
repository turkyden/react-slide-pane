# React Slide Pane

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="turkyden" data-slug-hash="ExKOmqV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SlidePane">
  <span>See the Pen <a href="https://codepen.io/turkyden/pen/ExKOmqV">
  SlidePane</a> by turkyden (<a href="https://codepen.io/turkyden">@turkyden</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

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
