import React from 'react'

export default function OffsetBorderBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginBottom: 4,
        marginRight: 4,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          border: '1px solid #dedfe2',
          bottom: -4,
          left: 4,
          right: -4,
          top: 4,
        }}
      />
      <div
        style={{
          position: 'relative',
          border: '1px solid #dedfe2',
          background: 'white',
        }}
      >
        {children}
      </div>
    </div>
  )
}
