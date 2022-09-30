import React from 'react'
import { useCanvas } from './CanvasCtx'

export const ClearCanvas = () => {
  const { clearCanvas } = useCanvas()

  return <button onClick={clearCanvas}>Clear</button>
}