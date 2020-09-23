/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, {
  ReactElement,
  MouseEvent,
  TouchEvent,
  CSSProperties,
  useState
} from 'react'
import Resizer from './Resizer'

export type Size = string | number

export type Split = 'vertical' | 'horizontal'

export type SlidePaneProps = {
  onResizerClick?: (e: MouseEvent) => void
  onResizerDoubleClick?: (e: MouseEvent) => void
  split?: Split
  children: Array<ReactElement>
  initialWidth?: Size
  initialHeight?: Size
  initialSize?: Size
  resizerStyle?: CSSProperties
}

export default function SlidePane({
  onResizerClick,
  onResizerDoubleClick,
  split,
  children,
  resizerStyle,
  initialWidth = 600,
  initialHeight = 400
}: SlidePaneProps) {
  const [isResizing, setIsResizing] = useState(false)
  const [position, setPosition] = useState(200 - 11)

  const onMouseDown = (event: MouseEvent) => setIsResizing(true)
  const onMouseUp = (event: MouseEvent) => isResizing && setIsResizing(false)
  const onMouseMove = (event: MouseEvent) => {
    if (isResizing) {
      setPosition(event.clientX - 11)
    }
  }
  const onTouchStart = (event: TouchEvent) => console.log('onTouchStart', event)
  const onTouchEnd = (event: TouchEvent) => console.log('onTouchEnd', event)

  const [notNullChildren, notNullChildren2] = React.Children.toArray(
    children
  ).filter(c => c)

  const SlidePaneCSS = css`
    position: relative;
    overflow: hidden;
    width: ${initialWidth}px;
    height: ${initialHeight}px;
    user-select: none;
  `

  const PaneCSS = css`
    position: absolute;
  `

  const PaneFrontCSS = css`
    position: absolute;
    right: ${600 - position}px;
  `

  const PaneFrontBoxCSS = css`
    width: ${position}px;
    overflow: hidden;
  `

  return (
    <div data-type="slide-pane" css={SlidePaneCSS} onMouseMove={onMouseMove}>
      <div data-type="pane" css={PaneCSS}>
        {notNullChildren}
      </div>
      <Resizer
        className="test"
        onClick={onResizerClick}
        onDoubleClick={onResizerDoubleClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        key="resizer"
        resizerClassName="resizer"
        split={split}
        style={{ left: position, ...resizerStyle }}
      />
      <div data-type="pane-front" css={PaneFrontCSS}>
        <div data-type="pane-front-box" css={PaneFrontBoxCSS}>
          {notNullChildren2}
        </div>
      </div>
    </div>
  )
}
