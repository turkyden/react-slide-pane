import React, { CSSProperties } from 'react'

type PaneProps = {
  children: any
}

export default function Pane({ children }: PaneProps) {
  // const eleRef = useRef();

  const defaultStyle: CSSProperties = {
    display: 'block',
    position: 'absolute'
  }

  return (
    <div data-type="pane" style={defaultStyle}>
      {children}
    </div>
  )
}
