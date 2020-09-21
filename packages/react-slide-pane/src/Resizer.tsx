import React, { CSSProperties, MouseEvent, TouchEvent } from 'react'

export const RESIZER_DEFAULT_CLASSNAME = 'Resizer'

export type Split = 'vertical' | 'horizontal'

export type ResizerProps = {
  className: string
  onClick?: (event: MouseEvent) => void
  onDoubleClick?: (event: MouseEvent) => void
  onMouseDown: (event: MouseEvent) => void
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
  onTouchEnd,
  onTouchStart,
  resizerClassName = RESIZER_DEFAULT_CLASSNAME,
  split,
  style
}: ResizerProps) {
  const classes = [resizerClassName, split, className]

  const defaultStyle: CSSProperties = {
    width: '11px',
    margin: '0 -5px',
    borderLeft: '5px solid rgba(255,255,255,0)',
    borderRight: '5px solid rgba(255,255,255,0)',
    cursor: 'col-resize',
    background: '#000',
    opacity: '0.2',
    zIndex: 1,
    backgroundClip: 'padding-box',
    position: 'absolute'
  }

  return (
    <span
      role="presentation"
      className={classes.join(' ')}
      style={{ ...defaultStyle, ...style }}
      onMouseDown={event => onMouseDown(event)}
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
