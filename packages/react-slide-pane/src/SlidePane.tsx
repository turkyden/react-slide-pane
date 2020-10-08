/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, {
  ReactElement,
  MouseEvent,
  TouchEvent,
  CSSProperties,
  useState,
  useRef
} from 'react'
import { useRect } from '@reach/rect'
import Resizer from './Resizer'

export type Size = string | number

export type Split = 'vertical' | 'horizontal'

export type SlidePaneProps = {
  onResizerClick?: (e: MouseEvent) => void
  onResizerDoubleClick?: (e: MouseEvent) => void
  split?: Split
  initial?: Size
  width: number
  height: number
  children: Array<ReactElement>
  resizerStyle?: CSSProperties
}

export default function SlidePane({
  onResizerClick,
  onResizerDoubleClick,
  split = 'vertical',
  initial = 200,
  width = 600,
  height = 400,
  children,
  resizerStyle
}: SlidePaneProps) {
  // your own ref
  const ref = useRef(null)
  // pass it in to be observered
  const rect = useRect(ref)

  const x = rect ? rect.x : 0
  const w = rect ? rect.width : width
  const h = rect ? rect.height : height
  let initialPosition: number
  if (typeof initial === 'number') {
    initialPosition = initial
  } else if (typeof initial === 'string' && initial.includes('px')) {
    initialPosition = Number(initial.split('px')[0])
  } else if (typeof initial === 'string' && initial.includes('%')) {
    initialPosition = w * Number(initial.split('%')[0]) * 0.01
  } else {
    initialPosition = 200
  }
  const initialResizerWidth = 10

  const [isResizing, setIsResizing] = useState(false)
  const [position, setPosition] = useState(
    initialPosition - initialResizerWidth
  )

  const onMouseDown = (event: MouseEvent) => setIsResizing(true)
  const onMouseUp = (event: MouseEvent) => setIsResizing(false)

  const onMouseMove = (event: MouseEvent) => {
    if (isResizing) {
      setPosition(event.clientX - x - initialResizerWidth)
    }
  }
  const onMouseLeave = (event: MouseEvent) => setIsResizing(false)

  const onTouchStart = (event: TouchEvent) => console.log('onTouchStart', event)
  const onTouchEnd = (event: TouchEvent) => console.log('onTouchEnd', event)

  const [notNullChildren, notNullChildren2] = React.Children.toArray(children)

  const SlidePaneCSS = css`
    position: relative;
    overflow: hidden;
    width: ${w}px;
    height: ${h}px;
    user-select: none;
  `

  const PaneCSS = css`
    position: absolute;
  `

  const PaneFrontCSS = css`
    position: absolute;
    right: ${w - position}px;
  `

  const PaneFrontBoxCSS = css`
    width: ${position}px;
    overflow: hidden;
  `

  return (
    <React.Fragment>
      <div
        data-type="slide-pane"
        ref={ref}
        css={SlidePaneCSS}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
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
          style={{
            left: position,
            width: initialResizerWidth,
            ...resizerStyle
          }}
        />
        <div data-type="pane-front" css={PaneFrontCSS}>
          <div data-type="pane-front-box" css={PaneFrontBoxCSS}>
            {notNullChildren2}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
