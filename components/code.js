import React from 'react'

export default ({ children, style }) => (
  <div style={style}>
    <style jsx>{`
      code {
        background: #fff;
        border-radius: 3px;
        color: #c92a2a;
        font-size: 16px;
        padding: 2px;
        white-space: pre;
      }
    `}</style>
    <code>{children}</code>
  </div>
)
