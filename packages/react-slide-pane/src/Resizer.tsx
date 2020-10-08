/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { CSSProperties, MouseEvent, TouchEvent } from 'react'

export const RESIZER_DEFAULT_CLASSNAME = 'Resizer'

export type Split = 'vertical' | 'horizontal'

export type ResizerProps = {
  className: string
  onClick?: (event: MouseEvent) => void
  onDoubleClick?: (event: MouseEvent) => void
  onMouseDown: (event: MouseEvent) => void
  onMouseUp: (event: MouseEvent) => void
  onTouchStart: (event: TouchEvent) => void
  onTouchEnd: (event: TouchEvent) => void
  split?: Split
  style?: CSSProperties
  resizerClassName: string
}

export default function Resizer({
  className,
  onClick,
  onDoubleClick,
  onMouseDown,
  onMouseUp,
  onTouchEnd,
  onTouchStart,
  resizerClassName = RESIZER_DEFAULT_CLASSNAME,
  split,
  style
}: ResizerProps) {
  const classes = [resizerClassName, split, className]

  const ResizerCSS = css`
    height: 100%;
    margin: 0 -5px;
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
    background: #000;
    opacity: 0.2;
    z-index: 1;
    background-clip: padding-box;
    position: absolute;
  `

  return (
    <span
      role="presentation"
      className={classes.join(' ')}
      css={ResizerCSS}
      style={style}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={event => {
        event.preventDefault()
        onTouchStart(event)
      }}
      onTouchEnd={event => {
        event.preventDefault()
        onTouchEnd(event)
      }}
      onClick={event => {
        if (onClick) {
          event.preventDefault()
          onClick(event)
        }
      }}
      onDoubleClick={event => {
        if (onDoubleClick) {
          event.preventDefault()
          onDoubleClick(event)
        }
      }}
    />
  )
}
