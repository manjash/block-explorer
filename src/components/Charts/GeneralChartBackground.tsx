import React, { useContext } from 'react'
import { DataContext } from '@visx/xychart'

export default function GeneralChartBackground() {
  const { theme, margin, width, height } = useContext(DataContext)

  // early return values not available in context
  if (width == null || height == null || margin == null || theme == null) return null

  return (
    <>
      <rect x={0} y={0} width={width} height={height} fill={theme?.backgroundColor ?? '#fff'} />
    </>
  )
}
