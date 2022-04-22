import * as React from "react"

// helpers
import BreakLinesHelper from "../helpers/break-lines.helper"

type AppProp = {
  text: string
}

const VerseComponent = (props: any) => {
  const { text } = props
  const content = BreakLinesHelper(text, 'v')

  return (
    <section className="verse-section">
      <div className="container">
        <p className="align-center">{ content }</p>
      </div>
    </section>
  )
}

export default VerseComponent