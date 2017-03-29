import React from 'react'
import Layout from '../components/layout'
import Code from '../components/code'

export default () => (
  <Layout>
    <div>
      <style>{`
        body {
          background: #c92a2a;
          color: #fff;
        }

        .nav li a {
          color: #fff !important;
        }

        .flex {
          display: flex;
        }
      `}</style>
      <h2 className="flex">
        Well, this page has
        <Code style={{ marginLeft: 5, marginRight: 5 }}>
          red
        </Code>
        background!
      </h2>

      <div>
        <Code style={{
          background: '#fff',
          width: 500,
          borderRadius: 3
        }}>
{`eval {
  use {essential},
  try
} from 'evalscript'

(eval::bind @/fast){
  @use[
    repeat,
    again,
    changeable const
  ]

  const ! 0

  try('what do you mean?') =>
    repeat till ! === 6
    again ? !{number}
}
`}
        </Code>
      </div>
    </div>
  </Layout>
)
