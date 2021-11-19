import React from 'react'
import OffsetBorderBox from './OffsetBorderBox'

export default function ChartBox({
  header,
  children,
}: {
  header: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <OffsetBorderBox>
        <div style={{ padding: 32 }}>
          <span style={{ fontSize: 16, fontFamily: 'favorit-regular' }}>{header}</span>
          {children}
        </div>
      </OffsetBorderBox>
    </div>
  )
}
