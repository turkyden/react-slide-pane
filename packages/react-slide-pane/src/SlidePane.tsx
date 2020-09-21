import React, {
  ReactElement,
  MouseEvent,
  TouchEvent,
  CSSProperties
} from 'react'
import Pane from './Pane'
import Resizer from './Resizer'

export type Size = string | number

export type Split = 'vertical' | 'horizontal'

export type SlidePaneProps = {
  onResizerClick?: (e: MouseEvent) => void
  onResizerDoubleClick?: (e: MouseEvent) => void
  split?: Split
  children: Array<ReactElement>
  initialSize?: Size
  resizerStyle?: CSSProperties
}

export default function SlidePane({
  onResizerClick,
  onResizerDoubleClick,
  split,
  children,
  resizerStyle,
  initialSize
}: SlidePaneProps) {
  const onMouseDown = (e: MouseEvent) => console.log('onMouseDown', e)

  const onTouchStart = (e: TouchEvent) => console.log('onTouchStart', e)

  const onMouseUp = (e: TouchEvent) => console.log('onMouseUp', e)

  const [notNullChildren, notNullChildren2] = React.Children.toArray(
    children
  ).filter(c => c)

  const defaultStyle: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    display: 'contents'
  }

  return (
    <div data-type="slide-pane" style={defaultStyle}>
      <Pane>{notNullChildren}</Pane>
      <Resizer
        className="test"
        onClick={onResizerClick}
        onDoubleClick={onResizerDoubleClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onMouseUp}
        key="resizer"
        resizerClassName="resizer"
        split={split}
        style={resizerStyle || {}}
      />
      <Pane>{notNullChildren2}</Pane>
    </div>
  )
}
